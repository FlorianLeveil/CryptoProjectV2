import React from "react";
import {StyleSheet, Text, View} from "react-native";
import GradientText from "../../../components/GradiantText";


const SelectedCryptoStyle = StyleSheet.create({
        selectCryptoContainer: {
            flex: 1,
            flexGrow: 1,
            maxHeight: 80,
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
            maxHeight: 70
        },
        priceIncrease: {
            color: "#00f62b"
        },
        priceDecrease: {
            color: "red",
        }
    })
;

const getStyleColorTendency = (percentage) => {
    let to_return;
    percentage = parseFloat(percentage)

    if (percentage > 0) {
        to_return = SelectedCryptoStyle.priceIncrease
    } else {
        to_return = SelectedCryptoStyle.priceDecrease
    }
    return to_return
}

const getTendencyToString = (percentage) => {
    let to_return;
    percentage = parseFloat(percentage)

    if (percentage > 0) {
        to_return = "+"
    } else {
        to_return = ""
    }
    return to_return + percentage.toString() + "%"

}

const CryptoSelected = () => {
    return (
        <View style={SelectedCryptoStyle.selectCryptoContainer}>
            <GradientText colors={["#0056d8", "#0086f6", "#00acf6", "#00cee4", "#12ebce"]}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 1}}
                          style={{flex: 1}}
                          text={SelectedCryptoStyle.selectCryptoData}
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

export default CryptoSelected;