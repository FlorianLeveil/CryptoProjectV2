import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";
import React from "react";

const defaultStyles = StyleSheet.create({
    viewText: {
        color: "white",
        fontWeight: "bold"
    },
    container: {
        flexDirection: "row",
        flex: 1,
        paddingBottom: 30
    }
});

const renderSimpleViewIfPropertyExist = (props, viewStyle) => {
    if (props)
        return (
            <View style={viewStyle}>
                <Text style={defaultStyles.viewText}>{props}</Text>
            </View>
        )
    return null;
}

const ClickableArea = (props) => {
    return (
        <View style={[defaultStyles.container, props.containerStyle]}>
            {renderSimpleViewIfPropertyExist(props.logo, props.logoStyle)}
            {renderSimpleViewIfPropertyExist(props.title, props.titleStyle)}
            {renderSimpleViewIfPropertyExist(props.icon, props.iconStyle)}
        </View>
    )
}


export default ClickableArea;