import React from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View,} from "react-native";
import {Archivo_500Medium, useFonts} from '@expo-google-fonts/archivo';
import commonStyles from "../CommonStyles";
import Input from "../../components/Input";
import {Checkbox, Switch} from 'react-native-paper';
import Button from "../../components/Button";
import StepBar from "../../components/StepBar";
import BackButton from "../../components/BackButton";

const styles = StyleSheet.create({
	input: {
		color: "white",
		fontSize: 15,
		borderWidth: 0
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
	}
});

const SecureYourWallet1 = ({navigation}) => {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
	});

	return (
		<View style={[commonStyles.container, {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			maxWidth: 600, paddingHorizontal: 30
		}]}>
			<SafeAreaView style={{flex: 1, width:'100%'}}>
				<View style={{height: 20}}></View>
				<ScrollView style={{flexGrow: 1}}>
					<View style={{
						flexDirection: "row",
						alignItems: "center",
						height: 50
					}}>
						<View
							style={{flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "row"}}>
							<BackButton/>
						</View>
						<View style={{flex: 3, alignItems: "center", flexDirection: "row", paddingHorizontal: 15}}>
							<StepBar nbSteps={3} currentStep={2}/>
						</View>
						<View style={{flex: 1}}>
						</View>
					</View>
					<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
						<Image
							style={{width: 248, height: 260, alignItems: "center", justifyContent: "center"}}
							source={require('../pictures/SecureYourWallet1.png')}/>
					</View>

					<View style={{marginTop: 20, height: 50, flexDirection: "row", justifyContent: "space-between"}}>
						<View style={{
							flex: 1,
							justifyContent: "flex-start",
							alignContent: "flex-start",
							flexWrap: 'wrap',
							flexDirection: 'row',
							paddingTop: 6
						}}>
							<Text style={{color: "white"}}>Don't risk losing your funds. protect your wallet by saving your <Text style={{color: "#5F97FF"}}>Seed phrase </Text> in a place
								you trust.</Text>
							<Text>It's the only way to recover your wallet if you get locked out of the app or get a new device.</Text>
						</View>
					</View>
				</ScrollView>


				<View style={{height: 120}}>
					<View style={{
						flex: 1,
						justifyContent: "flex-end",
						paddingBottom: 40,
						height: "100%"
					}}>
						<Button title="Start" isLinear={true}/>
					</View>
				</View>
			</SafeAreaView>
		</View>);
};
export default SecureYourWallet1;
