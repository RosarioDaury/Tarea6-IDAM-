import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: 'gray',
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        gap: 30,
        Text: {
            color: 'white',
            fontSize: 20
        }
    },
});