import React from "react";
import {Text, View, Image} from "react-native";
import {Archivo_500Medium, useFonts} from '@expo-google-fonts/archivo';

import commonStyles from "../CommonStyles";
import ButtonSurcharge from "../../components/ButtonSurcharge";
import GradiantText from "../../components/GradiantText";
import StepBar from "../../components/StepBar";



const Warthought2 = ({navigation}) => {
    return (
        <View style={[commonStyles.container, {
            flexDirection: "column"
        }]}>
            <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
                <Image
                    style={{width: 260, height: 300, alignItems: "center", justifyContent: "center"}}
                    source={require('../pictures/SecureYourWallet1.png')}/>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: "flex-end"}}>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Archivo_500Medium",
                        fontWeight: "normal",
                        fontSize: 40
                    }}>Safe</Text>
                    <GradiantText text={{fontSize: 40}} viewStyle={{height: 50}} colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']} locations={[0, 0.21, 0.54, 0.85]}>Security</GradiantText>
                </View>
                <View style={{flex: 0.5, alignItems: "center", justifyContent: "flex-end"}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", width: 40}}>
                        <StepBar withoutLine={true} nbSteps={3} currentStep={2}/>
                    </View>
                </View>
                <View style={{flex: 0.5, justifyContent: "flex-end", paddingHorizontal: 20, paddingBottom: 20}}>
                    <ButtonSurcharge title="Get Start" onPress={() => navigation.navigate('Warthought3')}/>
                </View>
            </View>
        </View>);
};
export default Warthought2;
