import React, {useState} from "react";
import {Button} from "react-native-paper";
const BackButton = () => {
	return (
		<Button icon="chevron-left" color="white" mode="Text button" onPress={() => console.log('Pressed')}></Button>
	);
};
export default BackButton;
