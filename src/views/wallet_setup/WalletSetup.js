import React, {useState} from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView, TouchableWithoutFeedback, Button, Keyboard, Platform, Pressable,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts, ArchivoBlack_400Regular} from '@expo-google-fonts/archivo-black';

import screensStyles from "../CommonStyles";

const WalletSetup = () => {
	let [fontsLoaded] = useFonts({
		ArchivoBlack_400Regular,
	});
	return (
		<View style={[styles.container, {
			// Try setting `flexDirection` to `"row"`.
			flexDirection: "column"
		}]}>
			<View style={{flex: 1.5, backgroundColor: "red"}}>

			</View>
			<View style={{flex: 1, backgroundColor: "darkorange"}}>
				<View style={{flex: 1, backgroundColor: "green", justifyContent: "center"}}>
					<Text style={{textAlign: "center"}}>Wallet Setup</Text>

				</View>
				<View style={{flex: 0.5, justifyContent: "center", paddingHorizontal: 20, paddingVertical: 20}}>
					<Pressable style={{
						backgroundColor: "#202832",
						borderRadius: 50,
						width: '100%',
						height: '100%',
						justifyContent: "center"
					}}>
						<Text style={{textAlign: "center", color: "white", fontFamily: "ArchivoBlack_400Regular"}}>Import
							Using Seed Phrase</Text>
					</Pressable>
				</View>
				<View style={{flex: 0.5, justifyContent: "center", paddingHorizontal: 20, paddingBottom: 40}}>
					<LinearGradient
						colors={['#4c669f', '#3b5998', '#192f6a']}>

					<Pressable style={{
						linearGradient: "91.26deg, #8AD4EC 0%, #EF96FF 21.74%, #FF56A9 54.03%, #FFAA6C 85.28%",
						borderRadius: 50,
						width: '100%',
						height: '100%',
						justifyContent: "center"
					}}>
						<Text style={{textAlign: "center", color: "white", fontFamily: "ArchivoBlack_400Regular"}}>Create
							a New Wallet</Text>
					</Pressable>
				</LinearGradient>
			</View>
		</View>
</View>
)
	;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "black",
	},
});

export default WalletSetup;
