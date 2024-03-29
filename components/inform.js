import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function Inform(props,stade){
    const styles= StyleSheet.create({
        styleText : {
            color : "#fff",
            fontWeight: "bold",
            fontSize : 25
        },
        view : {
            alignSelf: "stretch",
            backgroundColor: props.bgColor,
            justifyContent: "center",
            alignItems: "center",
            marginBottom : 25,
            height : 100
        }
    });
    return(
    <View style = {styles.view}>
            <Text style = {styles.styleText}>{props.text}</Text>
            <Text style = {styles.styleText}>Indice IMC : {props.imc}</Text>
    </View>
    );
}
