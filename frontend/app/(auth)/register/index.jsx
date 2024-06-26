import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useSession } from "@/hooks/useSession";
import FixView from '@/components/basic/FixView';
import { router } from "expo-router";

const Register = () => {
  const { signUp } = useSession();
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [chilname, setChilname] = useState('');


  const submitLogin = async () => {
    if (await signUp(cedula, email, contrasena, chilname) === true) { router.push("/") }
    else { console.log("Error al registrar Usuario") }
  };

  return (
    <FixView>
      <View style={styles.container}>
        <Image style={styles.cornerimage} source={require('@/assets/dino.png')} />
        <View style={styles.inputContainer}>
          <Text style={styles.titulo}>Registro</Text>
          <Text>Cedula</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCedula}
            value={cedula}
            placeholder=" "
          />
          <Text>Correo Electronico </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder=" "
          />
          <Text>Contraseña </Text>
          <TextInput
            style={styles.input}
            onChangeText={setContrasena}
            value={contrasena}
            placeholder=" "
          />
          <Text>Nombre del niño</Text>
          <TextInput
            style={styles.input}
            onChangeText={setChilname}
            value={chilname}
            placeholder=" "
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="contained-tonal"
              onPress={(submitLogin)}
              style={styles.button}
            >
              Crear Cuenta
            </Button>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.cornerImage} source={require('@/assets/apple.png')} />
        </View>
      </View>


    </FixView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 230,
    backgroundColor: '#F7F2FA',
    borderRadius: 15,
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imageContainer: {
    position: 'relative',
    bottom: 290,
    right: -250,
  },
  cornerImage: {
    width: 120,
    height: 120,
    position: 'relative',
    bottom: 1,
    right: 1,

  },
  cornerimage: {
    width: 200,
    height: 200,
    position: 'relative',
    bottom: -690,
  },
});