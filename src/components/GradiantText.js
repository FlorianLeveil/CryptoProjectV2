import React from "react";
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const GradientText = (props) => (
    <MaskedView
        style={[{width: '100%', height: 40}, props.viewStyle]}
        maskElement={<Text style={[{fontSize: 35, fontWeight: "600", textAlign: "center"}, props.text]}>{props.children}</Text>}
    >
        <LinearGradient
            colors={props.colors || ["#0056d8", "#0086f6", "#00acf6", "#00cee4", "#12ebce"]}
            start={props.start || {x: 0, y: 0}}
            end={props.end || {x: 1, y: 1}}
            style={[{width: '100%', height: 40}, props.viewStyle]}
            locations={props.locations}
        />
    </MaskedView>
);

export default GradientText;