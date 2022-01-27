import React from "react";
import {StyleSheet, View} from "react-native";
import ButtonSurcharge from "../../../components/ButtonSurcharge";
import {Feather, FontAwesome5, Foundation} from '@expo/vector-icons';

const ButtonsPartStyle = StyleSheet.create({
    selectCryptoContainer: {
        maxHeight: 80,
        flexDirection: "row",
        height: "100%",
        maxWidth: 600,
        width: "100%",
        justifyContent: "center",
    },
    buttonContainer: {
        maxWidth: 110,
        width: "100%",
    },
    buttonMiddleContainer: {
        maxWidth: 130,
    },
    button: {
        maxWidth: 100,
        flexDirection: "row",
        alignItems: "center",
    },
    middleButton: {
        maxWidth: 120,
    },
    buttonTitle: {},
    buttonIcon: {
        maxWidth: 30,
        width: "100%"
    }
})

const WalletButtonsPart = ({}) => {
    return (
        <View style={ButtonsPartStyle.selectCryptoContainer}>
            <View style={ButtonsPartStyle.buttonContainer}>
                <ButtonSurcharge withIcon={true}
								 stylePressable={ButtonsPartStyle.button}
								 styleTitle={ButtonsPartStyle.buttonTitle}
								 title="Sent"
								 icon={<Feather name="send" size={24} color="white" style={ButtonsPartStyle.buttonIcon}/>}
                />
            </View>
            <View style={[ButtonsPartStyle.buttonContainer, ButtonsPartStyle.buttonMiddleContainer]}>
                <ButtonSurcharge withIcon={true}
								 stylePressable={[ButtonsPartStyle.button, ButtonsPartStyle.middleButton]}
								 styleTitle={ButtonsPartStyle.buttonTitle}
								 title="Receive"
								 icon={<FontAwesome5 name="wallet" size={24} color="white" style={ButtonsPartStyle.buttonIcon}/>}
                />
            </View>
            <View>
                <ButtonSurcharge withIcon={true}
								 stylePressable={ButtonsPartStyle.button}
								 styleTitle={ButtonsPartStyle.buttonTitle}
								 title="Buy"
								 icon={<Foundation name="dollar" size={24} color="white" style={ButtonsPartStyle.buttonIcon}/>}
                />
            </View>
        </View>
    )
}

export default WalletButtonsPart;