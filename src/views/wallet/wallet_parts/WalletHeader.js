import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {MultiSelect} from "../../../components/MultiSelect";
import {MaterialIcons} from "@expo/vector-icons";


const headerStyles = StyleSheet.create({
        headerContainer: {
            flexDirection: "row",
            flex: 1
        },
        container: {
            flexDirection: "row",
            flex: 1,
        },
        viewUser: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: "wrap"
        },
        viewCrypto: {
            flex: 9,
            flexDirection: 'row',
            flexWrap: "wrap"
        },
        pressText: {
            color: "white",
            fontSize: 11,
            textAlign: "center"
        },
        multiSelectCrypto: {
            left: "30%"
        },
        viewArrowIcon: {
            paddingLeft: 5
        },
        viewHeader: {
            paddingTop: 50,
        }
    })
;

const WalletHeader = () => {
    return (
        <View style={[headerStyles.viewHeader, headerStyles.headerContainer]}>
            <View style={headerStyles.viewUser}>
                <Text>
                    UserLogged
                </Text>
            </View>
            <View style={headerStyles.viewCrypto}>
                <MultiSelect title="Cryptos" onPressElementStyle={headerStyles.multiSelectCrypto}>
                    <View style={headerStyles.container}>
                        <View>
                            <Text style={headerStyles.pressText}>Etherium Main</Text>
                        </View>
                        <View style={headerStyles.viewArrowIcon}>
                            <MaterialIcons name="keyboard-arrow-down" size={15} color="white"/>
                        </View>
                    </View>
                </MultiSelect>
            </View>
        </View>
    )
}

export default WalletHeader;