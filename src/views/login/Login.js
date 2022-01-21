import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, View,} from "react-native";
import commonStyles from "../CommonStyles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";
import GradientText from "../../components/GradiantText";
import {signUserIn} from "../../firebase/firebase";

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

const Login = ({navigation}) => {
	const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('');

	const login = async () => {
		const userCred = await signUserIn(email, password);
		if (userCred && userCred.user) {
			navigation.navigate('Navbar')
		}
	};

	return (
		<View style={[commonStyles.container, {
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		}]}>
			<SafeAreaView style={{flex: 1, maxWidth: 600, width: '100%'}}>
				<View style={{height: 20}}></View>
				<View style={{
					flexDirection: "row",
					alignItems: "center",
					height: 50
				}}>
					<View
						style={{flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "row"}}>
						<BackButton onPress={() => navigation.navigate('WalletSetup')}/>
					</View>
					<View style={{flex: 3, alignItems: "center", flexDirection: "row", paddingHorizontal: 15}}>
						<GradientText>
							Login
						</GradientText>
					</View>
					<View style={{flex: 1}}>
					</View>
				</View>
				<ScrollView style={{flexGrow: 1}}>
					<View style={{paddingTop: 30}}><Input forLogin getCurrentValue={setEmail} label="Email" isEmail/></View>
					<View style={{paddingTop: 15}}><Input forLogin getCurrentValue={setPassword} label="Password" isPassword/></View>
				</ScrollView>
				<View style={{height: 80}}>
					<View style={{
						flex: 1,
						justifyContent: "flex-end",
						paddingBottom: 20,
						height: "100%"
					}}>
						<Button title="Login" isLinear={true} onPress={login}/>
					</View>
				</View>
			</SafeAreaView>
		</View>);
};
export default Login;
