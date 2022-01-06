import React from "react";
import {Text, View} from "react-native";
import {Archivo_500Medium, useFonts} from '@expo-google-fonts/archivo';

import commonStyles from "../CommonStyles";
import Image from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage";
import Button from "../../components/Button";


const WalletSetup = () => {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
	});
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
					<Button title="Using Seed Phrase"/>
				</View>
				<View style={{flex: 0.5, justifyContent: "center", paddingHorizontal: 20, paddingBottom: 40}}>
					<Button title="Create a New Wallet" isLinear={true}/>
				</View>
			</View>
		</View>);
};

export default WalletSetup;
