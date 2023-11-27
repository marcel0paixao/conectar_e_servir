import React, {useContext, useEffect, useState} from "react"
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal } from "react-native"
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from 'formik';
import * as yup from 'yup';
import AuthContext from "../../../contexts/auth";
import { Help } from "../Home";
import axios from "axios";

export default function CreateCall(){
    const [submitErrors, setSubmitErrors] = useState('');
    const navigation = useNavigation<StackTypes>();

    const [help, setHelp] = useState<Help>();

    interface MyFormValues {
        description: string;
    }

    const validationSchema = yup.object().shape({
        description: yup.string()
            .required('Por favor, insira a descrição')
            .min(5, 'A descrição deve ter no mínimo 5 caracteres')
            .max(1000, 'A descrição deve ter no máximo 1000 caracteres'),
    });

    const initialValues: MyFormValues = { description: '' }
    const { user } = useContext(AuthContext);
    return (
        <AppLayout footer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            validateOnMount={false}
            onSubmit={(values: MyFormValues) => {
                const help = {
                  description: values.description,
                  callerUser: user?.id,
                  status: 'created',
                  date: new Date()
                }
                axios.post("http://localhost:8090/call", help) .then(response => {
                  if (response) navigation.navigate('CallDashboard', {help: help});
                }).catch(e => {
                  setSubmitErrors('Não foi possível submeter o formulário, verifique sua conexão.');
                })
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
                    multiline={true}
                    numberOfLines={6}
                    onChangeText={handleChange('description')} />
                </View>
                {errors.description && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{errors.description}</Text>}

                {submitErrors && <Text style={{ marginLeft: 25, marginTop: 2, color: 'red', marginBottom: 10 }}>{submitErrors}</Text>}

                <TouchableOpacity style={{ ...styles.button, marginVertical: 20 }} onPress={handleSubmit}>
                  <Text style={globalStyles.buttonText}>Criar solicitação ajuda</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </Formik>
        </AppLayout>
    );
}