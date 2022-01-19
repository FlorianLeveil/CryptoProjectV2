import React from "react";
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const GradientText = (props) => (
    <MaskedView
        style={props.viewStyle}
        maskElement={<Text style={props.text}>{props.children}</Text>}
    >
        <LinearGradient
            colors={props.colors}
            start={props.start}
            end={props.end}
            style={props.style}
        />
    </MaskedView>
);

export default GradientText;