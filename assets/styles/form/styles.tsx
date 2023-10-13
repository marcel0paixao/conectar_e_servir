import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        marginTop: 20,
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 26,
        fontWeight: 'bold'
    },
    inputLabel: {
        paddingTop: 13,
        paddingBottom: 5,
        paddingHorizontal: 10,
        paddingLeft: 20
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: 'rgb(34, 34, 34)',
        borderRadius: 15,
        paddingLeft: 15,
        alignSelf: 'center',
        color: 'white'
    },
    viewCheckBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 30
    },
    checkboxLabel: {
        paddingTop: 15
    },
    checkboxInput: {
        margin: 10,
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 20
    },
    separator: {
        width: '80%',
        height: 1,
        backgroundColor: 'rgb(34, 34, 34)',
        paddingHorizontal: 15,
        alignSelf: 'center',
        marginTop: 40
    },
    forgotPass: {
        marginTop: 10,
        textAlign: "right",
        marginRight: 25
    },
    button: {
        backgroundColor: 'rgb(34, 34, 34)',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15,
        alignSelf: 'center',
        width: '90%',
        marginTop: 10,
    },
    loginOptions: {
        marginTop: 15,
    },
    loginOptionsButtons: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        height: 10,
        paddingTop: 40,
        paddingBottom: 60
    },
    loginOptionsLabel: {
        textAlign: 'center',
        color: 'rgb(34, 34, 34)',
        marginTop: 5
    },
    socialMediaButton: {
        width: 50,
        height: 50,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
        color: '#000',
        borderColor: 'rgb(34, 34, 34)',
        borderRadius: 15,
        borderWidth: 1
    },
    registerViewCheckbox: {
        marginHorizontal: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;