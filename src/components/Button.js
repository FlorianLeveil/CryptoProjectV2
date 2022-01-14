import React, {useState} from "react";
import {
	Text,
	StyleSheet,
 Pressable,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts, Archivo_500Medium} from '@expo-google-fonts/archivo';


const buttonStyles = StyleSheet.create({
	container: {
		borderRadius: 25,
		height: '100%',
		width: '100%',
		maxHeight: 50,
		justifyContent: "center",
	},
	title: {
		textAlign: "center",
		color: "white",
		fontFamily: "Archivo_500Medium",
		fontSize: 16,
		fontWeight: "bold"
	},
});
const Button = (props) => {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
	});
	if (props.isLinear) {
		return (
			<LinearGradient
				colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
				locations={[0, 0.21, 0.54, 0.85]}
				start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
				style={[buttonStyles.container]}
			>
				<Pressable style={({pressed}) => [{backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : 'none'}]}>
					<Text style={[buttonStyles.title, props.style]} selectable={false}>{props.title}</Text>
				</Pressable>
			</LinearGradient>
		);
	} else {
		return (
			<Pressable style={({pressed}) => [buttonStyles.container,{backgroundColor: pressed ? 'rgba(32,40,50,0.75)' : '#202832'}, props.stylePressable]}>
				<Text style={[buttonStyles.title, props.styleTitle]} selectable={false}>{props.title}</Text>
			</Pressable>
		);
	}
};

export default Button;
