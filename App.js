import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WalletSetup from "./src/views/wallet_setup/WalletSetup";

const PlacesStack = createNativeStackNavigator();
const RootTab = createBottomTabNavigator();


export default function App() {
    return (
        <WalletSetup/>
        // <Settings />
    );
}
