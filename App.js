import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WalletSetup from "./src/views/wallet_setup/WalletSetup";
import Settings from "./src/views/settings/Settings";
import CreatePassword from "./src/views/create_new_wallet/CreatePassword";
import Navbar from "./src/views/navBar/NavBar";

const PlacesStack = createNativeStackNavigator();
const RootTab = createBottomTabNavigator();


export default function App() {
    return (
        // <CreatePassword/>
        	<WalletSetup/>
        // <Navbar/>
    );
}
