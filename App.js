import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground } from "react-native";

export default function App() {
  const [text, setText] = useState(""); // Estado local para almacenar el texto ingresado

  const handleButtonPress = () => { // Función para manejar el evento de presionar el botón
    console.log("Botón Entrar presionado");
    console.log("Texto ingresado:", text);
  };

  return (
    <View style={styles.container}>
      {/* Barra de estado con texto claro y fondo transparente */}
      <StatusBar style="light" translucent={true} backgroundColor="transparent" />

      {/* Fondo de la aplicación con una imagen de fondo */}
      <ImageBackground
        source={{uri: 'https://th.bing.com/th/id/R.8c96e3f149ca3f71f97ed35f8d783669?rik=PaaShqIFVYrEqQ&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2015%2f11%2f1b5ef6b54973.jpg&ehk=VqJj1Zb9%2bJJo1AELOpIYwzOtRqxM1l5MS%2fMbGYvjp1I%3d&risl=&pid=ImgRaw&r=0'}}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        {/* Contenedor de la imagen del logo */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://i.pinimg.com/originals/d8/38/0e/d8380e8e96f5e86d6f0ec363e5a37f0b.png"
            }}
          />
        </View>

        {/* Contenedor del campo de entrada de texto */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Ingrese el código"
          />
        </View>
      </ImageBackground>

      {/* Contenedor del botón "Entrar" */}
      <View style={styles.topBar}>
        <Button 
          title="Entrar" 
          onPress={handleButtonPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topBar: {
    position: "absolute", // Coloca el contenedor en una posición absoluta
    top: 100, // Desplaza el contenedor hacia abajo desde la parte superior
    right: 20, // Desplaza el contenedor hacia la izquierda desde el borde derecho
    width: 100, // Establece el ancho del contenedor
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center", // Centra los elementos verticalmente
    alignItems: "center", // Centra los elementos horizontalmente
  },
  tinyLogo: { 
    height: 300,
    width: 300,
  },
  input: {
    height: 40,
    width: "80%", // Establece el ancho del campo de entrada
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: "white", // Establece el color de fondo del campo de entrada
  },
});

