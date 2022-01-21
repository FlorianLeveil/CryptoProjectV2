import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {Archivo_500Medium, useFonts} from '@expo-google-fonts/archivo';


const buttonStyles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: '100%',
        maxHeight: 50,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        color: "white",
        fontFamily: "Archivo_500Medium",
        fontSize: 16,
        fontWeight: "bold"
    },
});
const Button = (props) => {
    useFonts({
        Archivo_500Medium,
    });
    if (props.isLinear) {
        return (
            <LinearGradient
                colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
                locations={[0, 0.21, 0.54, 0.85]}
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                style={[buttonStyles.container]}
            >
                <Pressable onPressIn={props.onPress} disabled={props.disabled}
                           style={({pressed}) => [{backgroundColor: pressed || props.disabled ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'}, {
                               height: '100%',
                               justifyContent: 'center'
                           }]}>
                    <Text style={[buttonStyles.title, props.style]} selectable={false}>{props.title}</Text>
                </Pressable>
            </LinearGradient>
        );
    } else if (props.withIcon) {
        return (
            <Pressable disabled={props.disabled}
                       style={({pressed}) => [buttonStyles.container, {backgroundColor: pressed || props.disabled ? 'rgba(32,40,50,0.75)' : '#202832'}, props.stylePressable]}>
                {props.icon}
                <Text style={[buttonStyles.title, props.styleTitle]} selectable={false}>{props.title}</Text>
            </Pressable>
        )
    } else {
        return (
            <Pressable disabled={props.disabled}
                       style={({pressed}) => [buttonStyles.container, {backgroundColor: pressed || props.disabled ? 'rgba(32,40,50,0.75)' : '#202832'}, props.stylePressable]}>
                <Text style={[buttonStyles.title, props.styleTitle]} selectable={false}>{props.title}</Text>
            </Pressable>
        );
    }
};

export default Button;
