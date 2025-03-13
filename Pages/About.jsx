import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";

export default function AboutScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Om</Text>
      <Button onPress={() => navigation.navigate("Home")}>Gå till Hemskärmen</Button>
    </View>
  );
}
