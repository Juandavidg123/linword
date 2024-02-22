import FixView from "@/components/basic/FixView";
import { router } from "expo-router";
import { Button, Text } from "react-native-paper";

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
