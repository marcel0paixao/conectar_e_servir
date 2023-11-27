import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    titleContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 14,
      marginTop: 10,
    },
    button: {
      backgroundColor: 'rgb(34, 34, 34)',
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 15,
      marginLeft: 30,
      marginRight: 30,
      width: 300,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  })

  export default styles;