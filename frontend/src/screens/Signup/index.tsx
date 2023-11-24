import React, {useEffect, useState} from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal } from "react-native"
import CheckBox from 'expo-checkbox';
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from 'formik';
import * as yup from 'yup';
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SingUp(){
    const [privacyTerms, setPrivacyTerms] = useState(false);  
    const [useTerms, setUseTerms] = useState(false);
    const [termsUnset, setTermsUnset] = useState(false);
    const [signupError, setSignupError] = useState('');
    const [modalDate, setModalDate] = useState<boolean>(false);
    const [date, setDate] = useState<Date | null>(null);
    const [dateErrors, setDateErrors] = useState<string | null>(null);
    const navigation = useNavigation<StackTypes>();
    const past18years = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());

    const formatCPF = (value: string) => {
      const numericValue = value.replace(/\D/g, '');
    
      let formattedValue = numericValue.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
        '$1.$2.$3-$4'
      );
    
      return formattedValue;
    };

    interface MyFormValues {
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
      taxID: string;
    }

    const validationSchema = yup.object().shape({
      username: yup.string()
            .required('Por favor, insira o nome')
            .min(5, 'O nome deve ter no mínimo 5 caracteres'),
      email: yup.string()
            .email('Por favor, insira um email válido')
            .required('Por favor, insira o email')
            .min(6, 'O email deve ter no mínimo 6 caracteres'),
      password: yup.string()
            .required('Por favor, insira a senha')
            .min(8, 'A senha deve ter no mínimo 8 caracteres'),
      confirmPassword: yup.string()
            .required('Por favor, confirme a senha')
            .oneOf([yup.ref('password'), ''], 'As senhas precisam ser iguais'),
      taxID: yup.string()
            .required('Por favor, insira o CPF')
            .test('valid-cpf', 'CPF inválido', value => {
              if (!value) return false;
              const cpf = value.replace(/[^\d]+/g, ''); 
              if (cpf.length !== 11) return false; 
              
              return true;
            })
    });

    const initialValues: MyFormValues = { username: '', email: '', password: '', confirmPassword: '', taxID: ''}

    const validateWithouFormik = () => {
      setDateErrors(null);
      setTermsUnset(false)
      if (!useTerms || !privacyTerms) setTermsUnset(true);
      if (!date) setDateErrors('Selecione uma data.')
      else if (date > past18years) setDateErrors('Você deve ser maior de 18 anos.')
    }

    return (
        <AppLayout footer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            validateOnMount={false}
            onSubmit={async (values: MyFormValues) => {
                try {
                  await fetch("http://localhost:8000/user", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      username: values.username,
                      email: values.email,
                      password: values.password,
                      bornDate: date,
                      cpf: values.taxID.replace(/[.-]/g, '')
                    })
                  })
                  .then((response) => {
                    values.taxID = formatCPF(values.taxID);
                    if (response.ok) navigation.navigate('ConfirmEmail');
                    else setSignupError('Dados inválidos!');
                  }).catch(e => {
                    console.log('error: ', e)
                  })
                }
                catch (error) {
                  console.log(error);
                  setSignupError('Não foi possível submeter o formulário, verifique sua conexão.');
                }
              }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <ScrollView>
                <View>
                  <Text style={styles.title}>Cadastrar-se</Text>
                </View>

                <View>
                  <Text style={styles.inputLabel}>Nome</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Insira seu nome"
                    placeholderTextColor={'white'}
                    value={values.username}
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')} />
                </View>
                {errors.username && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{errors.username}</Text>}

                <View>
                  <Text style={styles.inputLabel}>E-mail</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    placeholder="Insira seu E-mail"
                    placeholderTextColor={'white'}
                    value={values.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')} />
                </View>
                {errors.email && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{errors.email}</Text>}

                <View>
                  <Text style={styles.inputLabel}>Senha</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Insira sua senha"
                    placeholderTextColor={'white'}
                    secureTextEntry={true} 
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')} />
                </View>
                {errors.password && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{errors.password}</Text>}

                <View>
                  <Text style={styles.inputLabel}>Confirmação de senha</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirme sua senha"
                    placeholderTextColor={'white'}
                    secureTextEntry={true} 
                    value={values.confirmPassword}
                    onBlur={handleBlur('confirmPassword')}
                    onChangeText={handleChange('confirmPassword')} />
                </View>
                {errors.confirmPassword && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{errors.confirmPassword}</Text>}

                <View>
                  <Text style={styles.inputLabel}>CPF</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="number-pad"
                    placeholder="Insira seu CPF"
                    maxLength={14}
                    placeholderTextColor={'white'}
                    value={values.taxID}
                    onBlur={handleBlur('taxID')}
                    onChangeText={(text) => {
                      const formattedCPF = formatCPF(text);
                      handleChange('taxID')(formattedCPF);
                    }} />
                </View>
                {errors.taxID && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{errors.taxID}</Text>}

                <View>
                  <Text style={styles.inputLabel}>Data de nascimento</Text>
                  <TouchableOpacity style={{ ...styles.button, marginVertical: 5 }} onPress={() => setModalDate(!modalDate)}>
                    <Text style={{...globalStyles.buttonText, textAlign: 'left', marginLeft: 15}}>{
                      date?.toLocaleDateString('pt-BR') ?? 'Selecione uma data'
                    }</Text>
                  </TouchableOpacity>
                  {modalDate && 
                    <Modal animationType="slide" transparent={true} visible={true}>
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <TouchableOpacity style={{ ...styles.closeButton, marginVertical: 20 }} onPress={() => setModalDate(!modalDate)}>
                            <Text style={globalStyles.buttonText}>x</Text>
                          </TouchableOpacity>
                          <Text style={styles.inputLabel}>Insira sua data de nascimento</Text>
                          <DateTimePicker
                            value={date ?? past18years}
                            mode="date"
                            maximumDate={past18years}
                            locale="pt-BR"
                            onChange={e => {
                              if (e.type == 'set') setDate(new Date(e.nativeEvent.timestamp));
                            }}
                            style={{marginRight: 10}}
                          />
                        </View>
                      </View>
                    </Modal>
                  }
                </View>
                {dateErrors && <Text style={{ marginLeft: 25, color: 'red' }}>{dateErrors}</Text>}

                <View style={styles.registerViewCheckbox}>
                  <CheckBox
                    style={styles.checkboxInput}
                    disabled={false}
                    value={useTerms}
                    onValueChange={() => setUseTerms(!useTerms)}
                  />
                  <Text style={styles.checkboxLabel}>Concordo com os termos de uso</Text>
                </View>

                <View style={styles.registerViewCheckbox}>
                  <CheckBox
                    style={styles.checkboxInput}
                    disabled={false}
                    value={privacyTerms}
                    onValueChange={() => setPrivacyTerms(!privacyTerms)}
                  />
                  <Text style={styles.checkboxLabel}>Concordo com os termos de privacidade</Text>
                </View>

                {termsUnset && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>Aceite os termos para continuar</Text>}

                {signupError && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{signupError}</Text>}

                <TouchableOpacity style={{ ...styles.button, marginVertical: 20 }} onPress={() => {
                  validateWithouFormik();
                  return handleSubmit();
                }}>
                  <Text style={globalStyles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </Formik>
        </AppLayout>
    );
}