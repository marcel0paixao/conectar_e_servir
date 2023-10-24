import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        height: '100%',
    },
    footer: {
        width: '100%',
        backgroundColor: '#222222',
        justifyContent: 'center',
        marginTop: 'auto'
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#222222',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,

    },
    headerLogo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginHorizontal: 10
    },
    iconBack: {
        fontSize: 22,
        marginTop: 10,
        color: 'white',
        marginRight: 10,
        marginLeft: 10
    },
    name: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        marginRight: 'auto'
    },
    button: {
        height: 50,
        borderRadius: 15,
        backgroundColor: 'rgb(34, 34, 34)',
        width: 35,
        marginLeft: 5
    }
})

export default styles;