import FixView from "@/components/basic/FixView";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSession } from "@/hooks/useSession";
import { router } from "expo-router";

const index = () => {
  const { signIn } = useSession();

  const submit = () => {
    signIn("parent", "parent");
    router.push("/");
  };

  return (
    <FixView>
      <Text>Login parents!!</Text>
      <Button mode="contained" onPress={submit}>
        Sign In
      </Button>
    </FixView>
  );
};

export default index;
