import React from "react";
import {
	Text, StyleSheet, View
} from "react-native";
import {useFonts, Archivo_500Medium} from '@expo-google-fonts/archivo';
import {SimpleLineIcons} from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
import {color} from "react-native-elements/dist/helpers";


const inputStyles = StyleSheet.create({
	input: {
		fontFamily: "Archivo_500Medium",
		fontWeight: "normal",
		fontSize: 10,
		height: 42
	},
	container: {
		justifyContent: "center",
		flexDirection: "column",
		flex: 1
	},
	extra_container: {
		height: 35,
		justifyContent: "flex-start",
		paddingLeft: 10,
		flexDirection: "row"
	},
	extra_area: {
		justifyContent: "center"
	},
	extra_area_text: {
		fontFamily: "Archivo_500Medium",
		fontWeight: "normal",
		fontSize: 10,
	}
});

const Input = (props) => {
	useFonts({
		Archivo_500Medium,
	});

	const [text, setText] = React.useState('');
	const [viewPassword, setViewPassword] = React.useState(false);

	let otherArea
	let green = "#76E268"
	let yellow = "#ffd500"
	let red = "#ff0000"
	let color = red
	let indice = "Bad"
	let is_validate = false

	if (props.isPassword) {
		if (text.length > 9 ){
			color = green
			indice = "Good"
			is_validate = true
		} else if (text.length > 5 ) {
			color = yellow
			indice = "Medium"
			is_validate = true
		} else {
			is_validate = false
		}
		otherArea = <View style={inputStyles.extra_container}>
			<View style={inputStyles.extra_area}>
				<Text style={[inputStyles.extra_area_text, {color: "#6A84A0"}]}>Password strength:</Text>
			</View>
			<View style={inputStyles.extra_area}>
				<Text style={[inputStyles.extra_area_text, {color: color}]}> {indice}</Text>
			</View>
		</View>

	} else if (props.isEmail) {
		is_validate = text.includes('@') && text.includes('.');
		let error_msg = is_validate ? <Text></Text> : <Text style={[inputStyles.extra_area_text, {color: "red"}]}>Please enter correct email format !</Text>
		otherArea = <View style={inputStyles.extra_container}>
			<View style={inputStyles.extra_area}>
				{error_msg}
			</View>
		</View>
	}

	if (props.validation) {
		props.validation(is_validate)
	}

	return (
		<View style={inputStyles.main_container}>
			<View style={inputStyles.container}>
				<TextInput
					mode="outlined"
					label={props.label}
					style={inputStyles.input}
					theme={{
						colors: {
							primary: "#6A84A0",
							background: "black",
							text: "#6A84A0",
							placeholder: "#6A84A0"
						}
					}}
					onChangeText={text => setText(text)}
					secureTextEntry={props.isPassword && !viewPassword}
					right={props.isPassword ? <TextInput.Icon name="eye" color="grey" style={{justifyContent: "flex-end", paddingBottom: 2}} onPress={() => setViewPassword(!viewPassword)}/> : undefined
					}
				/>
			</View>
			{otherArea}
		</View>
	);
};
export default Input;
