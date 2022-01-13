import React from "react";
import {FlatList, View,} from "react-native";

import {Text} from 'react-native-elements';
import screensStyles from "../CommonStyles";
import ClickableArea from "../../components/Input/Input"
import inputStyles from "../../components/Input/InputStyles";
import {MaterialCommunityIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';
import MainBackground from "../../components/MainBackground";


const Settings = ({}) => {
    return (
        <MainBackground>
            <View style={screensStyles.viewHeader}>
                <Text style={screensStyles.viewTitleText} h5>Paramètres</Text>
            </View>
            <FlatList data={[
                {
                    logo: <MaterialCommunityIcons name="account-circle-outline" size={24} color="white"/>,
                    title: 'Account',
                    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                },
                {
                    logo: <SimpleLineIcons name="share" size={24} color="white"/>,
                    title: 'Share My Public Adress',
                    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                },
                {
                    logo: <SimpleLineIcons name="eye" size={24} color="white"/>,
                    title: 'View on Etherscan',
                    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                },
                {
                    logo: <SimpleLineIcons name="settings" size={24} color="white"/>,
                    title: 'Preferences',
                    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                },
                {
                    logo: <MaterialIcons name="headset-mic" size={24} color="white"/>,
                    title: 'Get help',
                    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                },
                {
                    logo: <MaterialCommunityIcons name="message-processing-outline" size={24} color="white"/>,
                    title: 'Send feed back',
                    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>,
                    containerStyle: {paddingBottom: 90}
                },
                {
                    logo: <MaterialIcons name="logout" size={24} color="white"/>,
                    title: 'Logout',
                    icon: <MaterialIcons name="keyboard-arrow-right" size={24} color="white"/>
                },
            ]}
                      renderItem={({item}) => (
                          <ClickableArea
                              logo={item.logo}
                              title={item.title}
                              icon={item.icon}
                              logoStyle={inputStyles.viewLogo}
                              titleStyle={inputStyles.viewTitle}
                              iconStyle={inputStyles.viewIcon}
                              containerStyle={item.containerStyle}
                          />
                      )}
            />
        </MainBackground>
    );
};

export default Settings;
