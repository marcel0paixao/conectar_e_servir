import React from "react"
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox'
import styles from "../../../assets/styles/form/styles";
import globalStyles from "../../../assets/styles/globalStyles";
import AppLayout from "../../layouts/AppLayout";
import { useNavigation } from "expo-router";
import { StackTypes } from "../../routes/stack.routes";

export default function Login() {
  const [remember, setRemember] = React.useState(false);
  const navigation = useNavigation<StackTypes>();

  return (
    <AppLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Entrar</Text>
        </View>
        <View>
          <View>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu E-mail"
              placeholderTextColor={'white'} />
          </View>
          <View>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              placeholderTextColor={'white'} />
          </View>

          <View style={styles.viewCheckBox}>
            <CheckBox
              style={styles.checkboxInput}
              disabled={false}
              value={remember}
              onValueChange={() => setRemember(!remember)}
            />
            <Text style={styles.checkboxLabel}>Manter conectado</Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert('Entrar!')}
            >
              <Text style={globalStyles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>

          <View style={styles.separator}></View>

          <View style={styles.loginOptions}>
            <Text style={styles.loginOptionsLabel}>Entre com redes sociais</Text>

            <View style={styles.loginOptionsButtons}>
              <TouchableOpacity style={{ ...styles.socialMediaButton, paddingTop: 6 }} onPress={() => alert('Botão pressionado!')} >
                <Text style={globalStyles.buttonText}>
                  <Image source={require('../../../assets/images/google.png')} width={23} height={23} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.socialMediaButton, paddingBottom: 2 }} onPress={() => alert('Botão pressionado!')} >
                <Image source={require('../../../assets/images/facebook.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Text onPress={() => navigation.navigate('Signup')} style={styles.loginOptionsLabel}>Não possui conta? <Text style={{ color: 'black', fontWeight: '600' }}>Cadastre-se</Text></Text>
        </View>
      </View>
    </AppLayout>
  );
}

