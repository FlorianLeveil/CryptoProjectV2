import React from "react";
import {Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const GradiantIcon = (props) => (
    <MaskedView
        style={{width: '100%'}}
        maskElement={<View
            style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
            }}>
            <Text>
                {props.children}
            </Text>
        </View>}
    >
        <LinearGradient
            colors={props.colors}
            start={props.start || {x: 0, y: 0}}
            end={props.end || {x: 1, y: 1}}
            style={[{width: '100%', height: 30}, props.viewStyle]}
        />
    </MaskedView>
);

export default GradiantIcon;