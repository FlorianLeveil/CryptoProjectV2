import {StyleSheet} from "react-native";

const priceStyle = StyleSheet.create({
        priceIncrease: {
            color: "#00f62b",
            marginLeft: 5
        },
        priceDecrease: {
            color: "red",
            marginLeft: 5
        }
    })
;

export const getStyleColorTendency = (percentage) => {
    let to_return;
    percentage = parseFloat(percentage)

    if (percentage > 0) {
        to_return = priceStyle.priceIncrease
    } else {
        to_return = priceStyle.priceDecrease
    }
    return to_return
}

export const getTendencyToString = (percentage) => {
    let to_return;
    percentage = parseFloat(percentage)

    if (percentage > 0) {
        to_return = "+"
    } else {
        to_return = ""
    }
    return to_return + percentage.toString() + "%"
}