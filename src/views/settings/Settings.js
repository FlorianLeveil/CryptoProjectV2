import React from "react";
import {FlatList, View,} from "react-native";

import {Text} from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import screensStyles from "../CommonStyles";


const Settings = (props) => {

    return (
        <View style={screensStyles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(149,0,133,1)', 'rgba(253,141,2,1)', 'rgba(0,0,0,1)', 'transparent']}
                style={screensStyles.background}
            />
            // TODO faire un component title
            <View style={screensStyles.viewHeader}>
                <Text style={screensStyles.viewTitleText} h5>Paramètres</Text>
            </View>
            <FlatList data={[
                {key: 'Mon compte'},
                {key: 'Partager mon adresse public'},
                {key: 'Voir sur Etherscan'},
                {key: 'Préférences'},
                {key: 'Demander de l\'Aide'},
                {key: 'Envoyez votre impression'},
            ]}
                      renderItem={({item}) => (
                          // TODO Faire un component + ajouter image
                          <View style={{flexDirection: "row", flex: 1}}>
                              <View style={{flex: 1, flexDirection: 'row', flexWrap: "wrap", width: '30%'}}>
                                  <Text>image</Text>
                              </View>
                              <View style={{flex: 1, flexDirection: 'row', flexWrap: "wrap", width: '30%'}}>
                                  <Text>{item.key}</Text>
                              </View>
                              <View style={{flexDirection: 'row', flexWrap: "wrap", width: '30%'}}>
                                  <Text>image</Text>
                              </View>
                          </View>
                      )}

            />

        </View>
    );
};

export default Settings;
