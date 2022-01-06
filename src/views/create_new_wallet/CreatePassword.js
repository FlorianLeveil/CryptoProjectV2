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
import {Ionicons} from "@expo/vector-icons";

import screensStyles from "../CommonStyles";
import Image from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedImage";
import Button from "../../components/Button";
import commonStyles from "../CommonStyles";

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	container: {
		height: 64,
		borderWidth: 1,
		padding: 10,
		borderRadius: 15,
		borderColor: "#00ff80"
	},
	main_container: {
		height: 84,
		backgroundColor: "orange"
	},
});

const CreatePassword = () => {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
	});
	const [text, onChangeText] = React.useState("Useless Text");
	const [number, onChangeNumber] = React.useState(null);
	return (
		<View style={[commonStyles.container, {
			flexDirection: "column"
		}]}>
			<View style={{flex: 1}}>
				<View style={{flex: 1, justifyContent: "center"}}>
				</View>
				<View style={{
					backgroundColor: "red",
					flex: 1,
					justifyContent: "center"
				}}>
					<View  style={styles.main_container}>
						<View style={styles.container}>
							<TextInput
								style={styles.input}
								onChangeText={onChangeNumber}
								value={number}
								placeholder="useless placeholder"
								keyboardType="numeric"
							/>
						</View>
						<View style={{height: 20, justifyContent: "end"}}>
							<Text style={{
								color: "white",
								fontFamily: "Archivo_500Medium",
								fontWeight: "normal",
								fontsize: 10,
								paddingLeft: 20,
							}}>Password strength:</Text>
							<Ionicons name="md-eye-outline" size={24} color="black" />
						</View>
					</View>
				</View>
				<View style={{
					backgroundColor: "yellow",
					flex: 1,
					justifyContent: "center",
					paddingHorizontal: 20,
					paddingBottom: 40
				}}>
				</View>
				<View style={{
					backgroundColor: "green",
					flex: 1,
					justifyContent: "center",
					paddingHorizontal: 20,
					paddingBottom: 40
				}}>
				</View>
			</View>
		</View>);
};
export default CreatePassword;
