import React, {useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import ModalBottom from "../../../components/ModalBottom";


const headerStyles = StyleSheet.create({
        headerContainer: {
            flexDirection: "row",
            flex: 1,
            maxHeight: 130,
            alignItems: "center"
        },
        multiSelectContainer: {
            flexDirection: "row",
        },
        viewUser: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: "wrap",
            justifyContent: 'center',
            borderRadius: 40,
            overflow: "hidden",
            height: 40,
            width: 60,
        },
        viewCrypto: {
            flex: 9,
            flexDirection: 'row',
            flexWrap: "wrap",
            justifyContent: 'center',
        },
        pressText: {
            color: "white",
            fontSize: 14,
            textAlign: "center",
        },
        viewArrowIcon: {
            paddingLeft: 5
        },
        image: {
            width: 40,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40
        }
    })
;

const WalletHeader = () => {
    const [openModal, setopenModal] = useState(false);

    const onOpen = () => {
        setopenModal(true);
    };

    const onDismiss = () => {
        setopenModal(false);
    };
    return (
        <View style={headerStyles.headerContainer}>
            <View style={headerStyles.viewUser}>
                <Image
                    style={headerStyles.image}
                    source={require('../../pictures/1555333244267.jpg')}/>
            </View>
            <View style={headerStyles.viewCrypto}>
                <View style={headerStyles.multiSelectContainer}>
                    <View>
                        <Text style={headerStyles.pressText} onPress={onOpen}>Etherium Main</Text>
                    </View>
                    <View style={headerStyles.viewArrowIcon}>
                        <MaterialIcons name="keyboard-arrow-down" size={15} color="white" onPress={onOpen}/>
                    </View>
                </View>
            </View>
            {openModal && (
                <ModalBottom onDismiss={onDismiss} height={600}>
                </ModalBottom>
            )}
        </View>
    )
}

export default WalletHeader;