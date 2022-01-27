import React, {useEffect, useRef, useState} from "react";
import {ScrollView, StyleSheet, View,} from "react-native";

import {Input, Text} from 'react-native-elements';
import screensStyles from "../CommonStyles";
import MainBackground from "../../components/MainBackground";
import {getCrypto} from "../../api/cryptoApi";
import MultiSelect from "react-native-multiple-select";
import {getRoundedInt} from "../../WalletUtils";
import ButtonSurcharge from "../../components/ButtonSurcharge";

const robotStyles = StyleSheet.create({
    container: {
        maxWidth: 600,
        width: "100%",
    },
    containerMultiSelect: {
        height: 80,
        zIndex: 99999
    },
    containerParentInvest: {
        height: 200
    },
    textToken: {
        paddingRight: 10,
        fontWeight: "bold"
    },
    textPriceInvest: {
        color: "white",
        fontSize: 16,
        fontWeight: "500"
    },
    cryptoId: {
        maxWidth: 40,
        width: "100%",
    },
    cryptoPrice: {
        paddingRight: 10
    },
    containerPriceInvest: {
        height: 30,
        flexDirection: "row"
    },
    viewPercentageBuy: {
        height: 80,
        flexDirection: "row"
    },
    containerPriceChangeBuy: {
        height: 30,
        flexDirection: "row"
    },
    containerPriceChangeSell: {
        height: 30,
        flexDirection: "row"
    },
    containerToken: {
        height: 80,
        flexDirection: "row"
    },
    containerPercentageTextBuy: {
        height: 80,
        flexDirection: "row"
    },
    containerPercentageToBuy: {
        height: 200,
        maxWidth: 180,
        alignItems: "center"
    },
    containerPercentageToSell: {
        height: 200,
        maxWidth: 180,
        alignItems: "center"
    },
    containerPercentage: {
        flexDirection: "row"
    }
});


const PurchasingRobot = ({}) => {
    const [loading, setLoading] = useState(true);
    const [cryptos, setCryptos] = useState([])
    const [selectedCrypto, setSelectedCrypto] = useState(null)
    const [selectedCryptoId, setSelectedCryptoId] = useState([])
    const [userPrice, setUserPrice] = useState(0);
    const [userPriceSell, setUserPriceSell] = useState(0);
    const [userPriceBuy, setUserPriceBuy] = useState(0);
    const multiSelectRef = useRef(null);


    const handleCrypto = async () => {
        const apiCryptos = await getCrypto()
        setCryptos(apiCryptos)
    };

    const onSelectedItemsChange = (selectedItem) => {
        setSelectedCryptoId(selectedItem);
        cryptos.map((crypto) => {
            if (crypto.id === selectedItem.toString()) {
                setSelectedCrypto(crypto)
            }
        })
    };

    const onChangeTextChangePrice = (price) => {
        setUserPrice(price)
    }

    const onChangeTextChangePriceSell = (price) => {
        setUserPriceSell(price)
    }

    const onChangeTextChangePriceBuy = (price) => {
        setUserPriceBuy(price)
    }

    const getSelectedCryptoPrice = () => {
        return selectedCrypto ? userPrice / selectedCrypto.price : "Please select a crypto"
    }

    const getSelectedCryptoPriceToBuy = () => {
        return selectedCrypto ? getRoundedInt(parseFloat(selectedCrypto.price) - parseFloat(selectedCrypto.price * (userPriceBuy / 100))) : "Please select a crypto"
    }
    const getSelectedCryptoPriceToSell = () => {
        return selectedCrypto ? getRoundedInt(parseFloat(selectedCrypto.price) + parseFloat(selectedCrypto.price * (userPriceSell / 100))) : "Please select a crypto"
    }

    useEffect(async () => {
        const launch = async () => {
            await handleCrypto();
            setLoading(false);
        };
        await launch();
    }, []);

    return (
        <MainBackground>
            <View style={screensStyles.viewHeader}>
                <Text style={screensStyles.viewTitleText} h5>Purchasing Robot</Text>
            </View>
            <View style={robotStyles.containerMultiSelect}>
                <MultiSelect
                    styleItemsContainer={{height: 400, backgroundColor: "rgba(0,0,0,0)"}}
                    styleInputGroup={{backgroundColor: "rgba(0,0,0,0)"}}
                    styleDropdownMenuSubsection={{backgroundColor: "rgba(0,0,0,0)"}}
                    styleRowList={{backgroundColor: "rgba(0,0,0,0.8)"}}
                    hideTags
                    single={true}
                    items={cryptos}
                    uniqueKey="id"
                    ref={multiSelectRef}
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedCryptoId}
                    selectText="Select your crypto"
                    searchInputPlaceholderText="Select your crypto"
                    onChangeInput={(text) => console.log("toto")}
                    textColor="white"
                    selectedItemTextColor="purple"
                    itemTextColor="white"
                    displayKey="name"
                />
            </View>
            <ScrollView style={robotStyles.container}>
                <View style={robotStyles.containerParentInvest}>
                    <View style={robotStyles.containerPriceInvest}>
                        <Text style={robotStyles.textPriceInvest}>
                            How much to invest :
                        </Text>
                    </View>
                    <Input keyboardType="numeric" style={{color: "white"}} onChangeText={onChangeTextChangePrice}/>
                    <View style={robotStyles.containerToken}>
                        <Text style={[robotStyles.textPriceInvest, robotStyles.textToken]}>
                            Token :
                        </Text>
                        <Text style={[robotStyles.textPriceInvest, robotStyles.cryptoPrice]}>
                            {getSelectedCryptoPrice()}
                        </Text>
                        <Text style={[robotStyles.textPriceInvest, robotStyles.cryptoId]}>
                            {selectedCrypto ? selectedCrypto.id : ""}
                        </Text>
                    </View>
                </View>
                <View style={robotStyles.containerPercentage}>
                    <View style={robotStyles.containerPercentageToBuy}>
                        <View style={robotStyles.containerPriceChangeBuy}>
                            <Text style={robotStyles.textPriceInvest}>
                                Percentage when buy
                            </Text>
                        </View>
                        <View style={robotStyles.viewPercentageBuy}>
                            <Input keyboardType="numeric" style={{color: "white"}}
                                   onChangeText={onChangeTextChangePriceBuy}/>
                        </View>
                        <View style={robotStyles.containerPercentageTextBuy}>
                            <Text style={[robotStyles.textPriceInvest, robotStyles.cryptoPrice]}>
                                {getSelectedCryptoPriceToBuy()}
                            </Text>
                        </View>
                    </View>
                    <View style={robotStyles.containerPercentageToSell}>
                        <View style={robotStyles.containerPriceInvest}>
                            <Text style={robotStyles.textPriceInvest}>
                                Percentage when sell
                            </Text>
                        </View>
                        <View style={robotStyles.viewPercentageBuy}>
                            <Input keyboardType="numeric" style={{color: "white"}}
                                   onChangeText={onChangeTextChangePriceSell}/>
                        </View>
                        <View style={robotStyles.containerPercentageTextBuy}>
                            <Text style={[robotStyles.textPriceInvest, robotStyles.cryptoPrice]}>
                                {getSelectedCryptoPriceToSell()}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 0.5, justifyContent: "center", paddingHorizontal: 20, paddingVertical: 20}}>
                    <ButtonSurcharge title="Simulate"/>
                </View>
            </ScrollView>
        </MainBackground>
    );
};

export default PurchasingRobot;
