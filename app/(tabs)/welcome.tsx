import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Conectar e servir</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Link href="login">
          <Pressable>
            {({ pressed }) => (
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            )}
          </Pressable>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Button: {
    backgroundColor: 'rgb(34, 34, 34)',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    width: 300
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
});
