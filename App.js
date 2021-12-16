import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import home from "./src/views/home/Home";
import Home from "./src/views/home/Home";
import WalletSetup from "./src/views/wallet_setup/WalletSetup";

const PlacesStack = createNativeStackNavigator();
const RootTab = createBottomTabNavigator();



export default function App() {
	return (
		<WalletSetup />
	);
}
