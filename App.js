import React, { useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, View, TextInput} from 'react-native';

import Inform from "./components/inform";

export default function App() {
  [peso, setPeso] = useState("");
  [color, setColor] = useState("#FF4500");
  [altura, setAltura] = useState("");
  [IMC, setIMC] = useState("-");
  [text, setText] = useState("IMC");

  function calcIMC(){
    const peso_ = Number(peso);
    const altura_ = Number(altura)/100;
    const imc = peso_/((altura_)*(altura_));
    if ( imc < 18.5){
      setText("Abaixo do Peso");
      setColor("#7FFFD4");
    } else if ( imc >= 18.5 && imc <= 24.99) {
      setText("Peso Ideal");
      setColor("#00BFFF");
    } else if ( imc >= 25 && imc <= 29.99) {
      setText("Levemente Acima do Peso");
      setColor("#FFA500");
    }else if ( imc >= 30 && imc <= 34.99) {
      setText("Obesidade Grau I");
      setColor("#FF8C00");
    }else if ( imc >= 35 && imc <= 39.99) {
      setText("Obesidade Grau II");
      setColor("#8B0000");
    }else if ( imc >= 40) {
      setText("Obesidade Grau III");
      setColor("#1C1C1C");
    }
    setIMC(Math.round(imc));
    setPeso("");
    setAltura("");
  }

  return (
    <KeyboardAvoidingView  enabled = {true} behavior="padding" style={styles.container}>
      <Inform bgColor = {color} text = {text} imc = {IMC}/>
      <View style={styles.form}>
        <Text style = {styles.text}>DIGITE O SEU PESO: (kg)</Text>
        <TextInput
        value = {peso}
        keyboardType={"numeric"}
        style = {styles.input}
        placeholder = "Peso"
        placeholderTextColor = "#fff"
        onChangeText = {setPeso}
        />
        <Text style = {styles.text}>DIGITE A SUA ALTURA: (cm)</Text>
        <TextInput 
        value = {altura}
        keyboardType={"numeric"}
        style = {styles.input}
        placeholder = "Altura"
        placeholderTextColor = "#fff"
        onChangeText = {setAltura}
        />
        <TouchableOpacity onPress = {calcIMC} style = {styles.button}>
          <Text style = {styles.textButton}>CALCULAR IMC</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form : {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#FF4500",
    height: 300,
  },
  text : {
    fontWeight: "bold",
    color : "#fff",
  },
  input : {
    color : "#fff",
    borderWidth : 1,
    borderColor : "#fff",
    backgroundColor: "#FF4500",
    paddingHorizontal: 20,
    fontSize: 16,
    height: 44,
    marginBottom: 25,
    borderRadius: 2
  },
  button : {
    backgroundColor : "#fff",
    justifyContent : "center",
    alignItems : "center",
    borderRadius: 2,
    marginTop: 15,
    height: 50
  },
  textButton : {
    color : "#FF4500",
    fontWeight: "bold",
  },
  inform : {
    alignSelf: "stretch",
    backgroundColor: "#FF4500",
    justifyContent: "center",
    alignItems: "center",
    marginBottom : 25,
    height : 100
  },
  textInform : {
    color : "#fff",
    fontWeight: "bold",
    fontSize : 25
  }
});
