import React from "react";
import {StyleSheet, Text, View} from "react-native";
import GradientText from "../../../components/GradiantText";
import {getStyleColorTendency, getTendencyToString} from "../WalletUtils";


const SelectedCryptoStyle = StyleSheet.create({
        selectCryptoContainer: {
            flex: 1,
            flexGrow: 1,
            maxHeight: 110,
        },
        selectCryptoData: {
            fontSize: 40,
            textAlign: "center",
            paddingBottom: 10,
        },
        selectCryptoTotalPrice: {
            fontSize: 15,
            color: "white",
            textAlign: "center",
        },
        selectCryptoTotalTendency: {
            fontSize: 15,
            textAlign: "center",
            marginLeft: 5
        },
        selectCryptoTotalPriceContainer: {
            flexDirection: "row",
            flex: 1,
            justifyContent: 'center',
            maxHeight: 20
        },
        viewStyle: {
            flex: 1,
            maxHeight: 60
        },
    })
;


const WalletCryptoSelected = () => {
    return (
        <View style={SelectedCryptoStyle.selectCryptoContainer}>
            <GradientText text={SelectedCryptoStyle.selectCryptoData}
                          viewStyle={SelectedCryptoStyle.viewStyle}
            >
                9.2362 ETH
            </GradientText>
            <View style={SelectedCryptoStyle.selectCryptoTotalPriceContainer}>
                <Text style={SelectedCryptoStyle.selectCryptoTotalPrice}>
                    €18 858.15
                </Text>
                <Text style={[SelectedCryptoStyle.selectCryptoTotalTendency, getStyleColorTendency("1.7")]}>
                    {getTendencyToString("1.7")}
                </Text>
            </View>
        </View>
    )
}

export default WalletCryptoSelected;