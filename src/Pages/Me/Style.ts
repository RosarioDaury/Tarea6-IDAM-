import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center"
    },
    Image: {
        width: "90%",
        height: "60%",
        marginVertical: 20
    },
    Text: {
        fontSize: 20
    },
    textContainer: {
        padding: 20,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
        alignItems: "center"
    }
})