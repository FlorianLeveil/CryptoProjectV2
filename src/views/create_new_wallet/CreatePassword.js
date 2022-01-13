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
import commonStyles from "../CommonStyles";
import Input from "../../components/Input";
import { Switch } from 'react-native-paper';

const styles = StyleSheet.create({
	input: {
		color: "white",
		fontSize: 15,
		borderWidth: 0,
		outline: "none",
		border: "none !important"
	},
	container: {
		height: 54,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#181E25",
		justifyContent: "center",
		flexDirection: "row"
	},
	main_container: {
		height: 79
	},
});

const CreatePassword = () => {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
	});
	const [text, onChangeText] = React.useState("Useless Text");
	const [number, onChangeNumber] = React.useState(null);
	const [isSwitchOn, setIsSwitchOn] = React.useState(false);

	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	return (
		<View style={[commonStyles.container, {
			flexDirection: "column"
		}]}>
			<View style={{flex: 1}}>
				<View style={{flex: 1, justifyContent: "center"}}>
				</View>
				<View style={{
					flex: 1,
					justifyContent: "center"
				}}>
					<Input/>
				</View>
				<View style={{
					backgroundColor: "yellow",
					flex: 1,
					justifyContent: "center",
					paddingHorizontal: 20,
					paddingBottom: 40
				}}>
					<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
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
