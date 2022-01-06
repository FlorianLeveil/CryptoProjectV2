import React, {useState} from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Pressable,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts, Archivo_500Medium} from '@expo-google-fonts/archivo';

import screensStyles from "../CommonStyles";
import Image from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage";
import Button from "../../components/Button";


const CreatePassword = () => {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
	});
	return (
		<View style={[styles.container, {
			// Try setting `flexDirection` to `"row"`.
			flexDirection: "column"
		}]}>
			<View style={{flex: 1.5, justifyContent: "center", alignItems: "center", paddingBottom: 20}}>
				<Image
						 style={{ width: 248, height: 260, alignItems: "center", justifyContent: "center" }}
						 source={require('../pictures/WalletSetup.png')} />
			</View>
			<View style={{flex: 1}}>
				<View style={{flex: 1, justifyContent: "center"}}>
					<Text style={{textAlign: "center",color: "white" ,fontFamily: "Archivo_500Medium", fontWeight: "normal", fontSize: 40}}>Wallet Setup</Text>

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "black",
	},
});

export default CreatePassword;
