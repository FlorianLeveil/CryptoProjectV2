import MainBackground from "../../components/MainBackground";
import React from "react";
import {View} from "react-native";
import WalletHeader from "./wallet_parts/WalletHeader";
import CryptoSelected from "./wallet_parts/CryptoSelected";
import WalletButtonsPart from "./wallet_parts/WalletButtonsPart";

const Wallet = ({}) => {
    return (
        <MainBackground>
            <View style={{flex: 1}}>
                <WalletHeader/>
                <CryptoSelected/>
                <WalletButtonsPart/>
            </View>
        </MainBackground>
    )
}

export default Wallet;