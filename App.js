import React, { useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, View, TextInput} from 'react-native';

import Inform from "./components/inform";

export default function App() {
  [peso, setPeso] = useState("");
  [color, setColor] = useState("#0000ff");
  [altura, setAltura] = useState("");
  [IMC, setIMC] = useState("");
  [text, setText] = useState("Calculadora de IMC");

  function calcIMC(){
    if (peso != "" && altura != "") {
      const peso_ = Number(peso);
      const altura_ = Number(altura)/100;
      const imc = peso_/((altura_)*(altura_));
      if ( imc < 18.5){
        setText("Abaixo do Peso");
        setColor("#ff0000"); //vermelho
      } else if ( imc >= 18.5 && imc <= 24.99) {
        setText("Peso Ideal");
        setColor("#008000");//verde
      } else if ( imc >= 25 && imc <= 29.99) {
        setText("Levemente Acima do Peso");
        setColor("#ffff40");//amarelo
      }else if ( imc >= 30 && imc <= 34.99) {
        setText("Obesidade de 1° Grau");
        setColor("#FFA500");//laranja
      }else if ( imc >= 35 && imc <= 39.99) {
        setText("Obesidade de 2° Grau");
        setColor("#ff6961");//vermelho
      }else if ( imc >= 40) {
        setText("Obesidade de 3° Grau");
        setColor("#8b0000"); //vermelho escuro
      }
      setIMC(Math.round(imc));
      setPeso("");
      setAltura("");
    }
  }

  return (
    <KeyboardAvoidingView  enabled = {true} behavior="padding" style={styles.container}>
      <Inform bgColor = {color} text = {text} imc = {IMC}/>
      <View style={styles.form}>
        <TextInput
        value = {peso}
        keyboardType={"numeric"}
        style = {styles.input}
        placeholder = 'Informe seu Peso: '
        placeholderTextColor = "#808080"
        onChangeText = {setPeso}
        />
        <TextInput 
        value = {altura}
        keyboardType={"numeric"}
        style = {styles.input}
        placeholder = "Informe sua Altura: "
        placeholderTextColor = "#808080"
        onChangeText = {setAltura}
        />
        <TouchableOpacity onPress = {calcIMC} style = {styles.button}>
          <Text style = {styles.textButton}> Calcular </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form : {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingTop: 150,
    backgroundColor: "#fff",
    height: 300,
  },
  input : {
    color : "#808080",
    borderBottomWidth : 1,
    borderBottomColor: '#120a8f',
    paddingVertical: 0,
    fontSize: 16,
    height: 44,
    marginBottom: 25,
    
  },
  button : {
    backgroundColor : "blue",
    justifyContent : "center",
    alignItems : "center",
    borderRadius: 5,
    marginTop: 180,
    height: 50,
    
  },
  textButton : {
    color : "#fff",
    fontSize: 20
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
    fontSize : 35
  }
});
