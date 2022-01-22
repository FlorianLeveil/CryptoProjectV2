import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";
import React from "react";

const defaultStyles = StyleSheet.create({
    viewText: {
        color: "white",
        fontWeight: "bold"
    },
    container: {
        flexDirection: "row",
        maxHeight: 200,
        height: 80,
        alignItems: "center",
    }
});

const getText = (item, textStyle, isText = true) => {
    if (isText) {
        return <Text style={[defaultStyles.viewText, textStyle]}>{item}</Text>
    }
    return item
}
const getViewCryptoPriceAndPercentage = (cryptoPrice, cryptoPercentage, cryptoPriceStyle, cryptoPercentageStyle, cryptoAndPriceContainerStyle) => {
    return (
        <View style={cryptoAndPriceContainerStyle}>
            <Text style={cryptoPriceStyle}>
                {cryptoPrice}
            </Text>
            <Text style={cryptoPercentageStyle}>
                {cryptoPercentage}
            </Text>
        </View>
    )
}

const renderSimpleView = (item, itemStyle, isText = true, textStyle = null) => {
    return (
        <View style={itemStyle}>
            {getText(item, textStyle, isText)}
        </View>
    )
}

const renderImageView = (item, itemStyle) => {
    return (
        <View style={itemStyle}>
            {item}
        </View>
    )
}


const renderSimpleViewCryptoWithPriceAndPercentage = (item, itemStyle, cryptoPrice, cryptoPercentage, cryptoPriceStyle, cryptoPercentageStyle, cryptoAndPriceContainerStyle, textStyle = null, moreInfoStyle = null) => {
    return (
        <View style={itemStyle}>
            {getText(item, textStyle)}
            {getViewCryptoPriceAndPercentage(cryptoPrice, cryptoPercentage, cryptoPriceStyle, cryptoPercentageStyle, cryptoAndPriceContainerStyle)}
        </View>
    )
}

export const MultipleViewSameLine = (props) => {
    return (
        <View style={[defaultStyles.container, props.containerStyle]}>
            {renderSimpleView(props.firstView, props.logoStyle, props.isText, props.textStyle)}
            {renderSimpleView(props.secondView, props.titleStyle, props.moreInfo, props.isText, props.textStyle)}
            {renderSimpleView(props.thirdView, props.iconStyle, props.isText, props.textStyle)}
        </View>
    )
}

export const MultipleViewCryptoWithPriceAndPercentage = (props) => {
    return (
        <View style={[defaultStyles.container, props.containerStyle]}>
            {renderImageView(props.firstView, props.logoStyle)}
            {renderSimpleViewCryptoWithPriceAndPercentage(props.secondView, props.titleStyle, props.cryptoPrice, props.cryptoPercentage, props.cryptoPriceStyle, props.cryptoPercentageStyle, props.cryptoAndPriceContainerStyle)}
            {renderSimpleView(props.thirdView, props.iconStyle, props.isText, props.thirdTextStyle)}
        </View>
    )
}


