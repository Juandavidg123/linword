import { Redirect } from "expo-router";
import { useSession } from "@/hooks/useSession";
import Router from "@/components/routers/parents";

export default function AppLayout() {
  const { session, isLoading, role } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) return <Redirect href="/login/kids" />;

  return <Router />;
}
