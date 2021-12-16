import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView, TouchableWithoutFeedback, Button, Keyboard, Platform,
} from "react-native";

import screensStyles from "../CommonStyles";

const Home = (props) => {

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<Text >Header</Text>
					<TextInput placeholder="Username"/>
					<View>
						<Button title="Submit" onPress={() => null} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Home;
