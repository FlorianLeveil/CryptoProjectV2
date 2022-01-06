import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WalletSetup from "./src/views/wallet_setup/WalletSetup";
import CreatePassword from "./src/views/create_new_wallet/CreatePassword";

const PlacesStack = createNativeStackNavigator();
const RootTab = createBottomTabNavigator();


export default function App() {
    return (
        <CreatePassword/>
	//	<WalletSetup/>
	// <Settings />
    );
}
