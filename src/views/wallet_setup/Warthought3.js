import React from "react";
import {Text, View, Image} from "react-native";

import commonStyles from "../CommonStyles";
import Button from "../../components/Button";
import GradiantText from "../../components/GradiantText";
import StepBar from "../../components/StepBar";



const Warthought3 = ({navigation}) => {

    return (
        <View style={[commonStyles.container, {
            flexDirection: "column"
        }]}>
            <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
                <Image
                    style={{width: 300, height: 300, alignItems: "center", justifyContent: "center"}}
                    source={require('../pictures/Walthought3.png')}/>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: "flex-end"}}>
                    <GradiantText text={{fontSize: 40}} viewStyle={{height: 50}} colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']} locations={[0, 0.21, 0.54, 0.85]}>Convenient</GradiantText>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Archivo_500Medium",
                        fontWeight: "normal",
                        fontSize: 40
                    }}>Transaction</Text>
                </View>
                <View style={{flex: 0.5, alignItems: "center", justifyContent: "flex-end"}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", width: 40}}>
                        <StepBar withoutLine={true} nbSteps={3} currentStep={3}/>
                    </View>
                </View>
                <View style={{flex: 0.5, justifyContent: "flex-end", paddingHorizontal: 20, paddingBottom: 20}}>
                    <Button title="Get Start" onPress={() => navigation.navigate('WalletSetup')}/>
                </View>
            </View>
        </View>);
};
export default Warthought3;
