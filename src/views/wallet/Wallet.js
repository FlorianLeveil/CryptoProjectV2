import MainBackground from "../../components/MainBackground";
import React from "react";
import {View} from "react-native";
import WalletHeader from "./wallet_parts/WalletHeader";
import WalletCryptoSelected from "./wallet_parts/WalletCryptoSelected";
import WalletButtonsPart from "./wallet_parts/WalletButtonsPart";
import WalletTokenPart from "./wallet_parts/WalletTokenPart";

const Wallet = ({}) => {
    return (
        <MainBackground>
            <View style={{flex: 1}}>
                <WalletHeader/>
                <WalletCryptoSelected/>
                <WalletButtonsPart/>
                <WalletTokenPart/>
            </View>
        </MainBackground>
    )
}

export default Wallet;