import MainBackground from "../../components/MainBackground";
import React, {useEffect, useState} from "react";
import {View} from "react-native";
import WalletHeader from "./wallet_parts/WalletHeader";
import WalletCryptoSelected from "./wallet_parts/WalletCryptoSelected";
import WalletButtonsPart from "./wallet_parts/WalletButtonsPart";
import WalletTokenPart from "./wallet_parts/WalletTokenPart";
import {getCrypto} from "../../api/cryptoApi";

const Wallet = ({props}) => {
    const [loading, setLoading] = useState(true);
    const [cryptos, setCryptos] = useState([])
    const handleCrypto = async () => {
        const apiCryptos = await getCrypto()
        setCryptos(apiCryptos)
    };

    useEffect(async () => {
        const launch = async () => {
            await handleCrypto();
            setLoading(false);
        };
        await launch();
    }, []);
    return (
        <MainBackground>
            <View style={{flex: 1}}>
                <WalletHeader/>
                <WalletCryptoSelected/>
                <WalletButtonsPart/>
                <WalletTokenPart cryptos={cryptos}/>
            </View>
        </MainBackground>
    )
}

export default Wallet;