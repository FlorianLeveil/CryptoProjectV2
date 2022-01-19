import React, {useState} from "react";
import {Button} from "react-native-paper";
const BackButton = (props) => {
	return (
		<Button icon="chevron-left" color="white" mode="Text button" onPress={props.onPress}></Button>
	);
};
export default BackButton;
