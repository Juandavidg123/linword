import FixView from "@/components/basic/FixView";
import { useSession } from "@/hooks/useSession";
import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

const index = () => {
  const { signIn } = useSession();

  const submit = () => {
    signIn("kid", "kid");
    router.push("/");
  };

  return (
    <FixView>
      <Text>Login kids!</Text>
      <Button mode="outlined" onPress={submit}>
        Sign In
      </Button>
    </FixView>
  );
};

export default index;
