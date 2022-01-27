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
    percentage = getRoundedInt(parseFloat(percentage) * 100)

    if (percentage > 0) {
        to_return = "+"
    } else {
        to_return = ""
    }
    return to_return + percentage.toString() + "%"
}

export const getRoundedInt = (num) => {
    return Math.round(num * 100) / 100
}

export const getPrice = (price, price_change) => {
    price = getRoundedInt(price)
    price_change = getRoundedInt(price_change)
    return price + price_change
}