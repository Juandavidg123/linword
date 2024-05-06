import { useState } from "react";

import FixView from "@/components/basic/FixView";
import { useSession } from "@/hooks/useSession";
import { router } from "expo-router";
import { Button, Text, TextInput } from "react-native-paper";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

const index = () => {
  const { signIn } = useSession();

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const submitLogin = async () => {
    if ((await signIn(email, contrasena)) === true) {
      router.push("/");
    } else {
      console.log("Error en autenticacion");
    }
  };

  const submitNewUser = () => router.push("/register");

  return (
    <FixView>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("@/assets/linword.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.titulo}>Iniciar Sesión</Text>
          <Text>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder=" "
          />
          <Text>Contraseña</Text>
          <TextInput
            style={styles.input}
            onChangeText={setContrasena}
            value={contrasena}
            placeholder=" "
          />
          <View style={styles.buttonWrapper}>
            <Button
              mode="contained-tonal"
              onPress={submitLogin}
              style={styles.button}
            >
              Entrar
            </Button>
            <Button
              mode="contained-tonal"
              onPress={submitNewUser}
              style={[styles.button, styles.registerButton]}
            >
              Registrarse
            </Button>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.cornerimage}
            source={require("@/assets/buho.png")}
          />
          <Image
            style={styles.cornerImage}
            source={require("@/assets/books.png")}
          />
        </View>
      </View>
    </FixView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  logoContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 50,
    backgroundColor: "#F7F2FA",
    borderRadius: 15,
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "blac0k",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    height: 50,
    marginBottom: 50,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  registerButton: {
    marginLeft: 10,
  },
  imageContainer: {
    position: "relative",
    bottom: 100,
  },
  cornerImage: {
    width: 120,
    height: 120,
    position: "relative",
    bottom: 200,
  },
  cornerimage: {
    width: 200,
    height: 200,
    position: "relative",
    bottom: -120,
    right: -200,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
