import React, {useState} from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View,} from "react-native";
import commonStyles from "../CommonStyles";
import {Checkbox} from 'react-native-paper';
import Button from "../../components/Button";
import StepBar from "../../components/StepBar";
import ModalBottom from "../../components/ModalBottom";

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
	const [openModal, setopenModal] = useState(false);

	const onOpen = () => {
		setopenModal(true);
	};

	const onDismiss = () => {
		setopenModal(false);
	};

	const [openModal2, setopenModal2] = useState(false);

	const onOpen2 = () => {
		setopenModal2(true);
	};

	const onDismiss2 = () => {
		setopenModal2(false);
	};
	const [checked, setChecked] = React.useState(false);
	const skip = () => {
		onDismiss2
		navigation.navigate('SecureYourWallet1')
	}
	return (
		<View style={[commonStyles.container, {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			maxWidth: 600, paddingHorizontal: 30,
		}]}>
			<SafeAreaView style={{flex: 1, width:'100%'}}>
				<View style={{height: 20}}></View>
				<View style={{
					flexDirection: "row",
					alignItems: "center",
					height: 50
				}}>

					<View style={{flex: 3, alignItems: "center", flexDirection: "row", paddingHorizontal: 15}}>
						<StepBar nbSteps={3} currentStep={2}/>
					</View>
				</View>
				<ScrollView style={{flexGrow: 1}}>
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
							<View style={{width: "100%"}}><Text style={{color: "white", fontSize: 18, fontWeight: "600", alignSelf: "center"}}>Secure Your Wallet</Text></View>
							<Text style={{color: "white", lineHeight: 20, paddingTop: 15}}>Don't risk losing your funds. protect your wallet by saving your <Text style={{color: "#5F97FF"}}  onPress={onOpen}>Seed phrase </Text> in a place
								you trust.</Text>
							<Text style={{color: "white", lineHeight: 20, paddingTop: 15}}>It's the only way to recover your wallet if you get locked out of the app or get a new device.</Text>
						</View>
					</View>
				</ScrollView>
				<View style={{height: 50, justifyContent: "center"}}>
					<Text style={{color: "#5F97FF", fontSize: 20, fontWeight: "600", alignSelf: "center"}} onPress={onOpen2}>Remind Me Later</Text>
				</View>
				<View style={{height: 80}}>
					<View style={{
						flex: 1,
						justifyContent: "flex-end",
						paddingBottom: 20,
						height: "100%"
					}}>
						<Button title="Start" isLinear={true}/>
					</View>
				</View>
			</SafeAreaView>
			{openModal2 && (
				<ModalBottom onDismiss={onDismiss2} height={300}>
					<Text style={{color: "white", alignSelf: "center", paddingVertical: 30, fontSize: 20, fontWeight: "600"}}>Skip Account Security ?</Text>
					<View style={{height: 50, flexDirection: "row", justifyContent: "space-between", marginVertical: 15}}>
						<View style={{height: 20, justifyContent: "center", alignContent: "flex-start", alignItems: "flex-start"}}>
							<Checkbox.Item
								mode="android"
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
						}}>
							<Text style={{color: "white"}}>I understand that if i lose mt seed phrase i will not be able to access my wallet</Text>
						</View>
					</View>
					<View style={{marginTop: 30, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
						<View style={{flex:1}}><Text style={{color: "#5F97FF", fontSize: 20, fontWeight: "600", alignSelf: "center"}} onPress={onDismiss2}>Secure</Text></View>
						<View style={{flex: 1}}><Button disabled={!checked} title="Skip" isLinear={true} onPess={skip}/></View>
					</View>
				</ModalBottom>
			)}
			{openModal && (
				<ModalBottom onDismiss={onDismiss} height={450}>
					<Text style={{color: "white", alignSelf: "center", paddingVertical: 30, fontSize: 20, fontWeight: "600"}}>What is a 'Seed phrase'</Text>
					<Text style={{color: "white", paddingVertical: 15, lineHeight: 20}}>A seed phrase is a set of twelve words that contains all the information about your wallet, including your funds. It's like a secret code used to access your entire wallet.</Text>
					<Text style={{color: "white", paddingVertical: 15, lineHeight: 20}}>You must keep your seed phrase secret and safe. If someone gets your seed phrase, they'll gain control over your accounts.</Text>
					<Text style={{color: "white", paddingVertical: 15, lineHeight: 20}}>Save it in a place where only you can access it. If you lose it, not even MetaMask can help you recover it.</Text>
					<View style={{flexGrow: 1}}></View>
					<Button onPress={onDismiss} title="I Got It" isLinear={true}/>
				</ModalBottom>
			)}
		</View>);
};
export default SecureYourWallet1;
