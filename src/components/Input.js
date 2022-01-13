import React from "react";
import {
	Text, StyleSheet, View
} from "react-native";
import {useFonts, Archivo_500Medium} from '@expo-google-fonts/archivo';
import {SimpleLineIcons} from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';


const inputStyles = StyleSheet.create({
	input: {
		fontFamily: "Archivo_500Medium",
		fontWeight: "normal",
		fontSize: 10,
		height: 54,
	},
	main_container: {
		height: 54,
		justifyContent: "center",
		flexDirection: "row"
	},
	container: {
		height: 79
	},
	first_text: {
		color: "#6A84A0",
		fontFamily: "Archivo_500Medium",
		fontWeight: "normal",
		fontSize: 10
	},
	left_area: {
		flex: 8,
		justifyContent: "center",
		flexDirection: "column"
	},
	extra_container: {
		height: 25,
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
	return (
		<View style={inputStyles.container}>
			<View style={inputStyles.main_container}>
				<View style={inputStyles.left_area}>
						<TextInput
							label="New Password"
							style={inputStyles.input}
							theme={{colors: {
									primary : "#6A84A0",
									background : "#292f3a",
									text : "#6A84A0",
									placeholder : "#6A84A0"
								}
							}}
							secureTextEntry
							right={<TextInput.Icon name="eye" color="grey"/>}
						/>
				</View>
			</View>
			<View style={inputStyles.extra_container}>
				<View style={inputStyles.extra_area}>
					<Text style={[inputStyles.extra_area_text, {color: "#6A84A0"}]}>Password strength:</Text>
				</View>
				<View style={inputStyles.extra_area}>
					<Text style={[inputStyles.extra_area_text, {color: "#76E268"}]}> Good</Text>
				</View>
			</View>
		</View>

	);
};
export default Input;
