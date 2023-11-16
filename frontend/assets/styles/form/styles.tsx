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
        color: 'white',
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
    checkboxInputLogin: {
        marginRight: 10,
        marginBottom: 0,
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
    closeButton: {
        backgroundColor: 'rgb(34, 34, 34)',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 15,
        alignSelf: 'center',
        width: 30,
        height: 30,
        textAlign: 'center',
        marginTop: 10,
        position: 'absolute',
        right: '110%'
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
        marginHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    subTitle: {
        fontSize: 14,
        marginTop: 10,
    },
    confirmEmailContainer: {
        paddingVertical: 100,
        alignContent: 'center',
        alignSelf: 'center',
        verticalAlign: 'center',
        textAlign: 'center',
        height: 'auto'
    },
    confirmationEmailInput: {
        backgroundColor: 'rgb(34, 34, 34)',
        borderRadius: 13,
        paddingLeft: 12,
        alignSelf: 'center',
        color: 'white',
        width: 35,
        height: 50,
        marginHorizontal: 7.5
    },
    confirmationEmailInputContainer: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center'
    },
    confirmEmailTextsContainer: {
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center'
    },
    dateInput: {
        marginRight: 'auto',
        marginLeft: 10,
        marginTop: 5
    },
    DataPickerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#A8E9CA'
    },
    DataPickerContainerTitle: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    datePickerStyle: {
        width: 230,
    },
    DataPickerContainerText: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color : "#000"
    },
    centeredView: {
        height: 'auto',
        backgroundColor: 'rgba(34, 34, 34, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});

export default styles;