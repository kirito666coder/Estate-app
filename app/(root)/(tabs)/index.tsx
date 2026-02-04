import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Link href={"/sign-in"} className="text-red-500 text-2xl font-bold">sign in</Link>
      <Link href={"/explore"} className="text-blue-500 text-2xl font-bold">explore</Link>
      <Link href={"/profile"} className="text-green-500 text-2xl font-bold">profile</Link>
      <Link href={"/properties/hello-world"} className="text-purple-500 text-2xl font-bold">properties</Link>
    </View>
  );
}
