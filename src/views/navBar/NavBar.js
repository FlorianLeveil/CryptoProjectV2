import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Settings from "../settings/Settings";
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import Wallet from "../wallet/Wallet";
import GradiantIcon from "../../components/GradiantIcon";
import GradiantText from "../../components/GradiantText";
import {StyleSheet, Text} from "react-native";
import PurchasingRobot from "../purchasing_robot/PurchasingRobot";

const TabNavigator = createBottomTabNavigator();

const navStyles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        fontSize: 10,
    },
    gradiantText: {
        maxHeight: 20
    },
    gradiantIcon: {
        maxHeight: 30
    }
})


const Navbar = () => (

        <TabNavigator.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarLabel: ({focused}) => {
                    let selectedColors = ["#5ffbf1", "#16e8ff", "#3ed0ff", "#80b4ff", "#b194e8", "#cf82cf", "#e371ad", "#eb6687", "#f4696c", "#f4744e", "#ea832f", "#d69500"];
                    let colors = ["#808080", "#808080"];

                    if (focused) {
                        colors = selectedColors
                    }
                    return <GradiantText viewStyle={navStyles.gradiantText} colors={colors}>
                        <Text style={navStyles.label}>{route.name}</Text>
                    </GradiantText>
                },
                tabBarStyle: {
                    height: 80,
                    paddingTop: 0,
                    backgroundColor: 'rgba(0,0,0,1)',
                    position: 'absolute',
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontWeight: "bold",
                },
                tabBarActiveTintColor: "gray",
                tabBarInactiveTintColor: "gray",
                tabBarIcon: ({focused}) => {
                    let to_return;
                    let selectedColors = ["#5ffbf1", "#16e8ff", "#3ed0ff", "#80b4ff", "#b194e8", "#cf82cf", "#e371ad", "#eb6687", "#f4696c", "#f4744e", "#ea832f", "#d69500"];
                    let colors = ["#808080", "#808080"];

                    if (focused) {
                        colors = selectedColors
                    }

                    if (route.name === "Wallet") {
                        to_return = <Entypo name="wallet" size={24} color="grey"/>
                    } else if (route.name === "Purchasing Robot") {
                        to_return =
                            <MaterialCommunityIcons name="swap-horizontal-circle-outline" size={24} color="grey"/>
                    } else if (route.name === "Settings") {
                        to_return = <MaterialCommunityIcons name="nut" size={24} color="grey"/>
                    }
                    return (
                        <GradiantIcon viewStyle={navStyles.gradiantIcon} colors={colors}>
                            {to_return}
                        </GradiantIcon>
                    );
                }
            })}
        >
            <TabNavigator.Screen
                name="Wallet"
                component={Wallet}
            />
            <TabNavigator.Screen
                name="Purchasing Robot"
                component={PurchasingRobot}
            />
            <TabNavigator.Screen
                name="Settings"
                component={Settings}
            />
        </TabNavigator.Navigator>
    )
;

export default Navbar;
