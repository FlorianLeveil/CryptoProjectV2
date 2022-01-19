import React from "react";
import {StyleSheet, View} from "react-native";

const ButtonsPartStyle = StyleSheet.create({
    selectCryptoContainer: {
        flex: 1,
        flexGrow: 1,
        maxHeight: 80,
        backgroundColor: "red",
        flexDirection: "row"
    },
})

const WalletButtonsPart = ({}) => {
    return (
        <View style={ButtonsPartStyle.selectCryptoContainer}>
        </View>
    )
}

export default WalletButtonsPart;