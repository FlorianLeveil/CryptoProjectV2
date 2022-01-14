import React from "react";
import {StyleSheet, Text, View} from "react-native";


const SelectedCryptoStyle = StyleSheet.create({
        selectCryptoContainer: {
            flex: 9,
        },
        selectCryptoData: {
            fontSize: 40,
            color: "white",
            textAlign: "center"
        }
    })
;

const CryptoSelected = () => {
    return (
        <View style={SelectedCryptoStyle.selectCryptoContainer}>
            <Text style={SelectedCryptoStyle.selectCryptoData}>
                9.2362 ETH
            </Text>
        </View>
    )
}

export default CryptoSelected;