import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";
import React from "react";

const defaultStyles = StyleSheet.create({
    viewText: {
        color: "white",
        fontWeight: "bold",
    },
    container: {
        flexDirection: "row",
        flex: 1,
        maxHeight: 200,
        height: 80,
        alignItems: "center"
    }
});

const renderSimpleViewIfPropertyExist = (item, itemStyle, isText = false) => {
    let to_return;
    if (isText) {
        to_return = <Text style={defaultStyles.viewText}>{item}</Text>
    } else {
        to_return = item
    }
    return (
        <View style={itemStyle}>
            {to_return}
        </View>
    )
}

const ClickableArea = (props) => {
    return (
        <View style={[defaultStyles.container, props.containerStyle]}>
            {renderSimpleViewIfPropertyExist(props.logo, props.logoStyle)}
            {renderSimpleViewIfPropertyExist(props.title, props.titleStyle, true)}
            {renderSimpleViewIfPropertyExist(props.icon, props.iconStyle)}
        </View>
    )
}


export default ClickableArea;