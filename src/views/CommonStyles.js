import {StyleSheet} from "react-native";

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1",
        padding: 16,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    viewTitleText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
    },
    viewHeader: {
        paddingTop: 30
    }
});


export default commonStyles;
