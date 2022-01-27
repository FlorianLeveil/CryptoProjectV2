import {getPrice, getRoundedInt, getStyleColorTendency, getTendencyToString} from "../WalletUtils";
import React, {useState} from "react";
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MultipleViewCryptoWithPriceAndPercentage} from "../../../components/MultipleViewSameLine";
import ButtonSurcharge from "../../../components/ButtonSurcharge";

import {SvgUri,} from 'react-native-svg';
import ModalBottom from "../../../components/ModalBottom";
import {LineChart} from "react-native-chart-kit";


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
    },
    graphTitle: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    }
})

const getLogo = (logoUrl) => {
    let imageType = logoUrl.split(".")
    if (imageType[imageType.length - 1] === "svg") {
        return (<SvgUri width="40" height="40" uri={logoUrl}/>)
    } else if (!logoUrl) {
        return (<Text/>)
    }

    return (<Image
        source={{uri: logoUrl}}
        style={{maxWidth: 40, maxHeight: 40, height: "100%", width: "100%"}}/>)
}

const WalletTokenPart = (props) => {
    const [openModal, setopenModal] = useState(false);
    const [actualCrypto, setActualCrypto] = useState(null);

    const onOpen = () => {
        setopenModal(true);
    };

    const setCrypto = (crypto) => {
        setActualCrypto(crypto)
    }

    const onDismiss = () => {
        setopenModal(false);
    };

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
                                getLogo(item.logo_url)
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
                            onPress={onOpen}
                            function={setCrypto}
                            item={item}
                        />
                    )}
                    _keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
            <View style={TokenPartStyle.viewBottom}>
                <ButtonSurcharge
                    stylePressable={TokenPartStyle.button}
                    styleTitle={TokenPartStyle.buttonTitle}
                    title="+ Add Token"
                />
            </View>
            {openModal && (
                <ModalBottom onDismiss={onDismiss} height={600}>
                    <View>
                        <Text style={TokenPartStyle.graphTitle}>{actualCrypto.name}</Text>
                        <LineChart
                            data={{
                                labels: ["ytd", "365d", "30d", "7d", "1d", "actual"],
                                datasets: [
                                    {
                                        data: [
                                            getPrice(actualCrypto.price, actualCrypto["ytd"].price_change),
                                            getPrice(actualCrypto.price, actualCrypto["365d"].price_change),
                                            getPrice(actualCrypto.price, actualCrypto["30d"].price_change),
                                            getPrice(actualCrypto.price, actualCrypto["7d"].price_change),
                                            getPrice(actualCrypto.price, 0)
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            yAxisLabel="€"
                            yAxisSuffix=""
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#06026c",
                                backgroundGradientFrom: "#2a0669",
                                backgroundGradientTo: "#700000",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                },
                                propsForLabels: {
                                    fontSize: "10"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                </ModalBottom>
            )}
        </View>
    )
}

export default WalletTokenPart;