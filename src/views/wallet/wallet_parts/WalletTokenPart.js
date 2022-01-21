import {getStyleColorTendency, getTendencyToString} from "../WalletUtils";
import React from "react";
import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import {MultipleViewCryptoWithPriceAndPercentage} from "../../../components/MultipleViewSameLine";
import Button from "../../../components/Button";


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
        flexWrap: "wrap",
        maxWidth: 100,
        width: "100%",
        alignItems: "flex-start"
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
    }
})


const WalletTokenPart = ({}) => {
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
                    data={[
                        {
                            id: 0,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
                            price: "€226.69",
                            tendency: "2"
                        },
                        {
                            id: 1,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto,
                            price: "€226.69",
                            tendency: "2"
                        },
                        {
                            id: 2,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
                            price: "€226.69",
                            tendency: "2"
                        },
                        {
                            id: 3,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
                            price: "€226.69",
                            tendency: "2"
                        },
                        {
                            id: 4,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
                            price: "€226.69",
                            tendency: "2"
                        },
                        {
                            id: 5,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
                            price: "€226.69",
                            tendency: "2"
                        },
                        {
                            id: 6,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
                            price: "€226.69",
                            tendency: "2",
                        },
                        {
                            id: 7,
                            logo: <FontAwesome5 name="bitcoin" size={35} color="white"/>,
                            title: 'Bitcoin',
                            nbToken: "19.2371 BTC", // TODO ajouter le sigle de la crypto
                            price: "€226.69",
                            tendency: "2",
                        }
                    ]}
                    renderItem={({item}) => (
                        <MultipleViewCryptoWithPriceAndPercentage
                            firstView={item.logo}
                            secondView={item.title}
                            thirdView={item.nbToken}
                            logoStyle={TokenPartStyle.viewLogo}
                            titleStyle={TokenPartStyle.viewTitle}
                            iconStyle={TokenPartStyle.viewNbToken}
                            containerStyle={item.containerStyle}
                            cryptoPrice={item.price}
                            cryptoPercentage={getTendencyToString(item.tendency)}
                            cryptoPriceStyle={TokenPartStyle.price}
                            cryptoPercentageStyle={[TokenPartStyle.price, getStyleColorTendency(item.tendency)]}
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