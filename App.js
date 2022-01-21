import React from 'react';
import WalletSetup from "./src/views/wallet_setup/WalletSetup";
import CreatePassword from "./src/views/create_new_wallet/CreatePassword";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SecureYourWallet1 from "./src/views/create_new_wallet/SecureYourWallet1";
import Navbar from "./src/views/navBar/NavBar";
import Warthought1 from "./src/views/wallet_setup/Warthought1";
import Warthought2 from "./src/views/wallet_setup/Warthought2";
import Warthought3 from "./src/views/wallet_setup/Warthought3";
import Login from "./src/views/login/Login";
import {Archivo_500Medium, Archivo_700Bold, useFonts} from "@expo-google-fonts/archivo";
import AppLoading from "expo-app-loading";


// const AppStack = createStackNavigator({
// 	BeersList: {
// 		screen: BeersList,
// 	},
// 	BeerAdd: {
// 		screen: BeerAdd,
// 	},
// 	Profile: {
// 		screen: Profile,
// 	},
// });


const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Archivo_500Medium,
		Archivo_700Bold
	});
	if (!fontsLoaded) {
		return (<AppLoading/>)
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Warthought1" screenOptions={{
					headerShown: false
				}}>
					<Stack.Screen name="Warthought1" component={Warthought1}/>
					<Stack.Screen name="Warthought2" component={Warthought2}/>
					<Stack.Screen name="Warthought3" component={Warthought3}/>
					<Stack.Screen name="WalletSetup" component={WalletSetup}/>
					<Stack.Screen name="Login" component={Login}/>
					<Stack.Screen name="CreatePassword" component={CreatePassword}/>
					<Stack.Screen name="SecureYourWallet1" component={SecureYourWallet1}/>
					<Stack.Screen name="Navbar" component={Navbar}/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

