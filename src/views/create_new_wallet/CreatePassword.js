import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View,} from "react-native";
import {Archivo_500Medium, useFonts} from '@expo-google-fonts/archivo';
import commonStyles from "../CommonStyles";
import Input from "../../components/Input";
import {Checkbox, Switch} from 'react-native-paper';
import Button from "../../components/Button";
import StepBar from "../../components/StepBar";
import BackButton from "../../components/BackButton";
import SecureYourWallet1 from "./SecureYourWallet1";

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

const CreatePassword = ({navigation}) => {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
	});
	const [isSwitchOn, setIsSwitchOn] = React.useState(false);
	const [checked, setChecked] = React.useState(false);

	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
	return (
		<View style={[commonStyles.container, {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		}]}>
			<SafeAreaView style={{flex: 1, maxWidth: 600}}>
				<View style={{height: 20}}></View>
				<ScrollView style={{flexGrow: 1}}>
					<View style={{
						flexDirection: "row",
						alignItems: "center",
						height: 50
					}}>
						<View style={{flex:1, alignItems: "center", justifyContent: "flex-start", flexDirection: "row"}}>
							<BackButton onPress={() => navigation.navigate('WalletSetup')}/>
						</View>
						<View style={{flex: 3,alignItems: "center", flexDirection: "row", paddingHorizontal: 15}}>
							<StepBar nbSteps={3} currentStep={1}/>
						</View>
						<View style={{flex:1}}>
						</View>
					</View>
					<View
						style={{marginTop: 30, marginBottom: 30, justifyContent: "center", alignItems: "center", paddingHorizontal: 20}}>
						<Text style={{fontWeight: "600", fontSize: 16, color: "blue"}}>Create Account</Text>
						<Text style={{
							marginTop: 20,
							fontSize: 14,
							color: "#8FA2B7",
							textAlign: "center",
							lineHeight: 24
						}}>This password will unlock your Metamask wallet only on this service</Text>
					</View>
					<Input label="New Password" isPassword/>
					<Input label="Email" isEmail/>

					<View style={{height:50, flexDirection: "row", justifyContent: "space-between"}}>
						<View style={{justifyContent: "center"}}>
							<Text style={{fontWeight: "600", fontSize: 16, color: "white"}}>Sign in with Face ID ?</Text>
						</View>
						<View style={{justifyContent: "center"}}>
							<Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
						</View>
					</View>
					<View style={{marginTop:20,height: 50, flexDirection: "row", justifyContent: "space-between"}}>
						<View style={{justifyContent: "flex-start", alignContent: "flex-start"}}>
							<Checkbox
								status={checked ? 'checked' : 'unchecked'}
								theme={{
									colors: {
										primary: "#3D8DFF",
										background: "black",
										text: "#6A84A0",
										placeholder: "#3D8DFF"
									}
								}}
								onPress={() => {
									setChecked(!checked);
								}}
							/>
						</View>
						<View style={{
							flex: 1,
							justifyContent: "flex-start",
							alignContent: "flex-start",
							flexWrap: 'wrap',
							flexDirection: 'row',
							paddingTop: 6
						}}>
							<Text style={{color: "white"}}>I understand that DeGe cannot recover this password for
								me.<Text style={{color: "#5F97FF"}}> Learn more</Text></Text>
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
						<Button title="Create Account" isLinear={true} onPress={() => navigation.navigate('SecureYourWallet1')}/>
					</View>
				</View>
			</SafeAreaView>
		</View>);
};
export default CreatePassword;
