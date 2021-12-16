import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView, TouchableWithoutFeedback, Button, Keyboard, Platform,
} from "react-native";

import screensStyles from "../CommonStyles";

const WalletSetup = () => {

	return (
		<View style={[styles.container, {
			// Try setting `flexDirection` to `"row"`.
			flexDirection: "column"
		}]}>
			<View style={{ flex: 1.5, backgroundColor: "red" }}>

			</View>
			<View style={{ flex: 1, backgroundColor: "darkorange"}}>
				<View style={{ flex: 1, backgroundColor: "green", justifyContent: "center" }}>
					<Text style={{textAlign: "center"}}>Wallet Setup</Text>

				</View>
				<View style={{ flex: 1, justifyContent: "center", paddingLeft: 10, paddingRight: 10 }}>
					<Button title="Import Using Seed Phrase"></Button>

				</View>
				<View style={{ flex: 1, justifyContent: "center", paddingLeft: 10, paddingRight: 10 }}>
					<Button title="Create a New Wallet"></Button>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "black",
	},
});

export default WalletSetup;
