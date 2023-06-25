import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
    },
    inputContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    textInput: {
        width: "80%",
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginRight: 5,
        fontSize: 20
    },
    responseContainer: {
        marginTop: 80,
        backgroundColor: '#89CFF0',
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        gap: 30,
        Text: {
            color: 'white',
            fontSize: 20
        }
    },
    responseContainerFemale: {
        marginTop: 80,
        backgroundColor: '#F33A6A',
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        gap: 30,
        Text: {
            color: 'white',
            fontSize: 20
        }
    },
})