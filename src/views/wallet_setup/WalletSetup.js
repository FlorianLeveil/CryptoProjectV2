import React from "react";
import {Text, View, Image} from "react-native";

import commonStyles from "../CommonStyles";
import ButtonSurcharge from "../../components/ButtonSurcharge";

const WalletSetup = ({navigation}) => {
    return (
        <View style={[commonStyles.container, {
            flexDirection: "column"
        }]}>
            <View style={{flex: 1.5, justifyContent: "center", alignItems: "center", paddingBottom: 20}}>
                <Image
                    style={{width: 248, height: 260, alignItems: "center", justifyContent: "center"}}
                    source={require('../pictures/WalletSetup.png')}/>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: "center"}}>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Archivo_500Medium",
                        fontWeight: "normal",
                        fontSize: 40
                    }}>Wallet Setup</Text>
                </View>
                <View style={{flex: 0.5, justifyContent: "center", paddingHorizontal: 20, paddingVertical: 20}}>
                    <ButtonSurcharge title="Login" onPress={() => navigation.navigate('Login')}/>
                </View>
                <View style={{flex: 0.5, justifyContent: "center", paddingHorizontal: 20, paddingBottom: 40}}>
                    <ButtonSurcharge title="Create a New Wallet" isLinear={true} onPress={() => navigation.navigate('CreatePassword')}/>
                </View>
            </View>
        </View>);
};

export default WalletSetup;
