import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    itemContainer: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        margin: 20,
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
        fontSize: 15,
        marginBottom: 2
    },
    textStyleBlue: {
        color: "blue",
        fontSize: 14,
        marginBottom: 2
    }
})