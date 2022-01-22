import {getRoundedInt, getStyleColorTendency, getTendencyToString} from "../WalletUtils";
import React from "react";
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import {MultipleViewCryptoWithPriceAndPercentage} from "../../../components/MultipleViewSameLine";
import Button from "../../../components/Button";

import {SvgUri,} from 'react-native-svg';


const TokenPartStyle = StyleSheet.create({
    tokenContainer: {
        maxWidth: 600,
        maxHeight: 470,
        width: "100%",
        alignItems: "center",
    },
    titleContainer: {
        maxHeight: 25,
        height: "100%",
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600"
    },
    viewLogo: {
        maxWidth: 50,
        width: "100%",
        alignItems: "center"
    },
    viewTitle: {
        flexWrap: "wrap",
        maxWidth: 200,
        width: "100%",
    },
    viewNbToken: {
        maxWidth: 100,
        width: "100%",
    },
    price: {
        color: "#8fa2b7",
        fontSize: 12,
        fontWeight: "normal",
        paddingTop: 5
    },
    priceAndTendencyContainer: {
        flexDirection: "row",
        maxHeight: 20
    },
    viewBottom: {
        alignItems: "center"
    },
    button: {
        maxWidth: 200,
        backgroundColor: "black"
    },
    buttonTitle: {
        color: "#5f97ff",
        fontWeight: "bold",
        fontSize: 20
    },
    lineContainer: {
        maxWidth: 80,
        width: "100%",
        justifyContent: "center",
        maxHeight: 2,
        backgroundColor: "white",
        height: "100%"
    },
    nbToken: {
        textAlign: "right"
    }
})

const oldData = [
    {
        id: 0,
        logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
        title: 'Bitcoin',
        nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
        price: "€226.69",
        tendency: "2"
    }
]

const getSvg = (logoUrl) => {
    let imageType = logoUrl.split(".")
    if (imageType[imageType.length - 1] === "svg") {
        return (<SvgUri width="40" height="40" uri={logoUrl}/>)
    }
    return (<Image
        source={{uri: logoUrl}}
        style={{maxWidth: 40, maxHeight: 40, height: "100%", width: "100%"}}/>)
}

const WalletTokenPart = (props) => {
    return (
        <View style={TokenPartStyle.tokenContainer}>
            <View style={TokenPartStyle.titleContainer}>
                <Text style={TokenPartStyle.title}>
                    Token
                </Text>
            </View>
            <View style={TokenPartStyle.lineContainer}/>
            <ScrollView>
                <FlatList
                    data={props.cryptos}
                    renderItem={({item}) => (
                        <MultipleViewCryptoWithPriceAndPercentage
                            firstView={
                                getSvg(item.logo_url)
                            }
                            secondView={item.name}
                            thirdView={"0 " + item.id}
                            logoStyle={TokenPartStyle.viewLogo}
                            titleStyle={TokenPartStyle.viewTitle}
                            iconStyle={TokenPartStyle.viewNbToken}
                            containerStyle={item.containerStyle}
                            thirdTextStyle={TokenPartStyle.nbToken}
                            cryptoPrice={"€" + getRoundedInt(item.price)}
                            cryptoPercentage={getTendencyToString(item["1d"] ? item["1d"].price_change_pct : 0)}
                            cryptoPriceStyle={TokenPartStyle.price}
                            cryptoPercentageStyle={[TokenPartStyle.price, getStyleColorTendency(item["1d"] ? item["1d"].price_change_pct : 0)]}
                            cryptoAndPriceContainerStyle={TokenPartStyle.priceAndTendencyContainer}
                        />
                    )}
                    _keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
            <View style={TokenPartStyle.viewBottom}>
                <Button
                    stylePressable={TokenPartStyle.button}
                    styleTitle={TokenPartStyle.buttonTitle}
                    title="+ Add Token"
                />
            </View>
        </View>
    )
}

export default WalletTokenPart;