import { Redirect, Stack } from "expo-router";
import { useSession } from "../_context";

export default function SignedInLayout() {
  const { session } = useSession();

  if (!session) return <Redirect href="/sign-in" />;
  return <Stack />;
}
