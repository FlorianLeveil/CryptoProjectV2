import React, { useRef } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Modalize } from 'react-native-modalize';


const multiSelectStyle = StyleSheet.create({
    headerText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modal: {
        backgroundColor: "black"
    },
    overlay:{
        backgroundColor: 'rgba(0, 0, 0, 0)',
    }
});



export const MultiSelect = (props) => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const getData = () => ({ name:"antoine" });

    const renderItem = (item) => (
        <View>
            <Text>{item.heading}</Text>
        </View>
    );

    return (
        <>
            <TouchableOpacity style={props.onPressElementStyle} onPress={onOpen}>
                {props.children}
            </TouchableOpacity>

            <Modalize
                ref={modalizeRef}
                flatListProps={{
                    data: getData(),
                    renderItem: renderItem,
                    keyExtractor: item => item.heading,
                    showsVerticalScrollIndicator: false,
                }}
                overlayStyle={multiSelectStyle.overlay}
                modalStyle={multiSelectStyle.modal}
                HeaderComponent={
                    <View>
                        <Text style={multiSelectStyle.headerText}>{props.title}</Text>
                    </View>
                }
                snapPoint={400}
            />
        </>
    );
}