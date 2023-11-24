import React, {useEffect, useState} from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal } from "react-native"
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from 'formik';
import * as yup from 'yup';

export default function CreateCall(){
    const [submitErrors, setSubmitErrors] = useState('');
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
        description: string;
    }

    const validationSchema = yup.object().shape({
        description: yup.string()
            .required('Por favor, insira a descrição')
            .min(5, 'A descrição deve ter no mínimo 5 caracteres')
            .max(1000, 'A descrição deve ter no máximo 1000 caracteres'),
    });

    const initialValues: MyFormValues = { description: ''}

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
                  await fetch("http://localhost:8000/call", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        description: values.description,
                    })
                  })
                  .then((response) => {
                    if (response.ok) navigation.navigate('ConfirmEmail');
                    else setSubmitErrors('Dados inválidos!');
                  }).catch(e => {
                    console.log('error: ', e)
                  })
                }
                catch (error) {
                  console.log(error);
                  setSubmitErrors('Não foi possível submeter o formulário, verifique sua conexão.');
                }
              }}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <ScrollView>
                <View>
                  <Text style={styles.title}>Solictar ajuda</Text>
                </View>
                <View>
                    <Text style={{...styles.subTitle, marginHorizontal: 20, marginBottom: 10}}>Solicite ajuda para tarefas simples, tais como carregar sacolas da compra ou colocar step no carro.</Text>
                </View>

                <View>
                  <Text style={styles.inputLabel}>Descreva qual ajuda necessita</Text>
                  <TextInput
                    style={styles.textarea}
                    placeholder="Descreva a necessidade"
                    placeholderTextColor={'white'}
                    value={values.description}
                    onBlur={handleBlur('description')}
                    onChangeText={handleChange('description')} />
                </View>
                {errors.description && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{errors.description}</Text>}

                {submitErrors && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{submitErrors}</Text>}

                <TouchableOpacity style={{ ...styles.button, marginVertical: 20 }} onPress={handleSubmit}>
                  <Text style={globalStyles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </Formik>
        </AppLayout>
    );
}