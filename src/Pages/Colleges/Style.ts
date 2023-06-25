import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
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
    itemContainer: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
    },
    textStyle: {
        fontSize: 14,
        marginBottom: 2
    },
    textStyleBlue: {
        color: "blue",
        fontSize: 14,
        marginBottom: 2
    }
});