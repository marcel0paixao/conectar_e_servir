import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardListContainer: {
        width: '100%',
        padding: 30
    },
    cardContainer: {
        width: '100%',
        height: 130,
        backgroundColor: 'rgb(234, 234, 234)',
        borderRadius: 15,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#aaa'
    },
    cardInfo: {
        padding: 13,
        display: 'flex',
        flexDirection: 'row'
    },
    cardActions: {
        width: '100%',
        height: 40,
        marginTop: 'auto',
        borderEndEndRadius: 15,
        borderEndStartRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#aaa'
    },
    actionButton: {
        height: 40,
        width: '50%',
        alignItems: 'center',
        paddingTop: 10
    },
    acceptButton: {
        borderLeftWidth: 0.5,
        borderLeftColor: '#aaa',
        color: 'green'
    },
    declineButton: {
        color: 'red',
        borderRightWidth: 0.5,
        borderRightColor: '#aaa',
    },
    cardImage: {
        width: 60, 
        height: 60, 
        borderRadius: 100
    },
    cardTitle: {
        fontWeight: "600",
        textTransform: "capitalize",
        fontSize: 18
    },
    cardDescription: {
        fontSize: 12,
        maxWidth: 200
    },
    cardText: {
        marginLeft: 10
    },
    time: {
        marginTop: 34, 
        marginLeft: -2, 
        color: 'rgb(50, 50, 50)', 
        fontSize: 11
    },
    cardDistance: {
        marginTop: 3,
        marginLeft: 'auto',
        fontWeight: '300',
        fontSize: 12
    }
});

export default styles;