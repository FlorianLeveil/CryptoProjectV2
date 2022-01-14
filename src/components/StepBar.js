import React from "react";
import {View} from "react-native";

const StepBar = (props) => {

	let nb_steps = props.nbSteps || 3
	let current_step = props.currentStep || 1

	let blue = "#3D8DFF"
	let grey = "#202832"

	let blue_cercle = <View
		style={{backgroundColor: blue, borderRadius: 8, width: 8, height: 8, borderColor: blue}}></View>
	let blue_line = <View style={{backgroundColor: blue, flexGrow: 1, height: 1, borderColor: blue}}></View>
	let grey_cercle = <View
		style={{backgroundColor: grey, borderRadius: 8, width: 8, height: 8, borderColor: grey}}></View>
	let grey_line = <View style={{backgroundColor: grey, flexGrow: 1, height: 1, borderColor: grey}}></View>

	let to_return = [blue_cercle]

	for (let i = 1; i < nb_steps; i++) {
		if (i < current_step) {
			to_return.push(blue_line)
			to_return.push(blue_cercle)
		} else {
			to_return.push(grey_line)
			to_return.push(grey_cercle)
		}
	}
	return (
		to_return.map((item) => {
			return item
		})
	);
};
export default StepBar;