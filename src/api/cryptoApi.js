import {Alert} from "react-native";

const getData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        Alert.alert(
            "Erreur lors de la récupération des données",
            err.message
        );
    }
};

export const getCrypto = async () => {
    return await getData("https://api.nomics.com/v1/currencies/ticker?key=d9aed0030d0105a6a4d9a423720143a84824d3d4&ids=")
}