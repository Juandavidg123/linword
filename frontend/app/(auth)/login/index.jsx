import { useState } from "react";
import FixView from "@/components/basic/FixView";
import { router } from "expo-router";
import { useSession } from "@/hooks/useSession";
import { Button, Text, TextInput } from "react-native-paper";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

const Login = () => {
  
  return (
    <FixView>
      <Text>Select:</Text>
      <Button mode="contained" onPress={() => router.push("/login/kids")}>
        Kids
      </Button>
      <Button mode="contained" onPress={() => router.push("/login/parents")}>
        Parents
      </Button>
    </FixView>
  );
};

export default Login;
