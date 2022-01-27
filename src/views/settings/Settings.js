import React from "react";
import {FlatList, ScrollView, StyleSheet, View,} from "react-native";

import {Text} from 'react-native-elements';
import screensStyles from "../CommonStyles";
import {MultipleViewSameLine} from "../../components/MultipleViewSameLine"
import {MaterialCommunityIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';
import MainBackground from "../../components/MainBackground";

const settingStyles = StyleSheet.create({
    container: {
        maxWidth: 600,
        width: "100%",
    },
});

const clickableAreaStyles = StyleSheet.create({
    viewLogo: {
        flex: 1,
    },
    viewTitle: {
        flex: 8,
    },
    viewIcon: {
        flex: 1,
    }
});

const Settings = ({}) => {
    return (
        <MainBackground>
            <View style={screensStyles.viewHeader}>
                <Text style={screensStyles.viewTitleText} h5>Settings</Text>
            </View>
            <ScrollView style={settingStyles.container}>
                <FlatList data={[
                    {
                        id: 0,
                        logo: <MaterialCommunityIcons name="account-circle-outline" size={24} color="white"/>,
                        title: 'Account',
                        icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                        containerStyle: {
                            height: 60,
                        }
                    },
                    {
                        id: 1,
                        logo: <SimpleLineIcons name="share" size={24} color="white"/>,
                        title: 'Share My Public Adress',
                        icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                        containerStyle: {
                            height: 60,
                        }
                    },
                    {
                        id: 2,
                        logo: <SimpleLineIcons name="eye" size={24} color="white"/>,
                        title: 'View on Etherscan',
                        icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                        containerStyle: {
                            height: 60,
                        }
                    },
                    {
                        id: 3,
                        logo: <SimpleLineIcons name="settings" size={24} color="white"/>,
                        title: 'Preferences',
                        icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                        containerStyle: {
                            height: 60,
                        }
                    },
                    {
                        id: 4,
                        logo: <MaterialIcons name="headset-mic" size={24} color="white"/>,
                        title: 'Get help',
                        icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                        containerStyle: {
                            height: 60,
                        }
                    },
                    {
                        id: 5,
                        logo: <MaterialCommunityIcons name="message-processing-outline" size={24} color="white"/>,
                        title: 'Send feed back',
                        icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                        containerStyle: {
                            height: 60,
                        }
                    },
                    {
                        id: 6,
                        logo: <MaterialIcons name="logout" size={24} color="white"/>,
                        title: 'Logout',
                        icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                        containerStyle: {
                            height: 200
                        }
                    },
                ]}
                          renderItem={({item}) => (
                              <MultipleViewSameLine
                                  firstView={item.logo}
                                  secondView={item.title}
                                  thirdView={item.icon}
                                  logoStyle={clickableAreaStyles.viewLogo}
                                  titleStyle={clickableAreaStyles.viewTitle}
                                  iconStyle={clickableAreaStyles.viewIcon}
                                  containerStyle={item.containerStyle}
                              />
                          )}
                          _keyExtractor={(item) => item.id.toString()}

                />
            </ScrollView>

        </MainBackground>
    );
};

export default Settings;
