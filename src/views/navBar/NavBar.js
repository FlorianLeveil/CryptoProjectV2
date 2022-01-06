import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Settings from "../settings/Settings";
import Home from "../home/Home";
import WalletSetup from "../wallet_setup/WalletSetup";
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator();


const Navbar = () => (
    <NavigationContainer>
        <TabNavigator.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 50,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    paddingBottom: 15,
                    backgroundColor: 'rgba(0,0,0,0)',
                    position: 'absolute',
                    borderTopWidth: 0

                },
                tabBarLabelStyle: {
                    fontWeight: "bold"
                },
                tabBarActiveTintColor: "gray",
                tabBarInactiveTintColor: "gray",
                tabBarIcon: ({}) => {
                    let to_return;

                    if (route.name === "Wallet") {
                        to_return = <Entypo name="wallet" size={24} color="grey"/>;
                    } else if (route.name === "Swap") {
                        to_return =
                            <MaterialCommunityIcons name="swap-horizontal-circle-outline" size={24} color="grey"/>
                    } else if (route.name === "Settings") {
                        to_return = <MaterialCommunityIcons name="nut" size={24} color="grey"/>
                    }
                    return (
                        to_return
                    );
                }
            })}
        >
            <TabNavigator.Screen
                name="Wallet"
                component={Home}
            />
            <TabNavigator.Screen
                name="Swap"
                component={WalletSetup}
            />
            <TabNavigator.Screen
                name="Settings"
                component={Settings}
            />
        </TabNavigator.Navigator>
    </NavigationContainer>
);

export default Navbar;
