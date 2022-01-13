import screensStyles from "../views/CommonStyles";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {View,} from "react-native";

const MainBackground = (props) => {
    return (
        <View style={screensStyles.container}>
            <LinearGradient
                colors={['#340f29', '#3b0f25', '#400f1f', '#44121a', '#461614', '#421613', '#3d1611', '#391610', '#2d1211', '#220e0f', '#16070a', '#000000']}
                locations={[0, 0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.30, 0.33]}
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.1, y: 0.3}}
                style={screensStyles.background}/>
            {props.children}
        </View>
    )
}

export default MainBackground;
