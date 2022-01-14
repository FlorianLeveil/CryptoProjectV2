import MainBackground from "../../components/MainBackground";
import React from "react";
import {StyleSheet, View} from "react-native";
import WalletHeader from "./wallet_parts/WalletHeader";
import CryptoSelected from "./wallet_parts/CryptoSelected";

const defaultStyles = StyleSheet.create({
        viewTextCryptoSelected: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        headerContainer: {
            flexDirection: "row",
            flex: 1
        },
        container: {
            flexDirection: "row",
            flex: 1,
        },
        viewUser: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: "wrap"
        },
        viewCrypto: {
            flex: 9,
            flexDirection: 'row',
            flexWrap: "wrap"
        },
        pressText: {
            color: "white",
            fontSize: 11,
            textAlign: "center"
        },
        multiSelectCrypto: {
            left: "30%"
        },
        viewArrowIcon: {
            paddingLeft: 5
        },
        viewHeader: {
            paddingTop: 50,
        },
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

const Wallet = ({}) => {
    return (
        <MainBackground>
            <View style={{flex: 1}}>
                <WalletHeader/>
                <CryptoSelected/>
            </View>
        </MainBackground>
    )
}

export default Wallet;