import React from 'react';
import WalletSetup from "./src/views/wallet_setup/WalletSetup";
import CreatePassword from "./src/views/create_new_wallet/CreatePassword";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SecureYourWallet1 from "./src/views/create_new_wallet/SecureYourWallet1";


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
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="WalletSetup"   screenOptions={{
				headerShown: false
			}}>
				<Stack.Screen name="WalletSetup" component={WalletSetup}/>
				<Stack.Screen name="CreatePassword" component={CreatePassword} />
				<Stack.Screen name="SecureYourWallet1" component={SecureYourWallet1} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

