import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hem</Text>
      {/* <Button onPress={() => navigation.navigate("Jokes")}>Navigera till Skämt-sidan</Button>
      <Button onPress={() => navigation.navigate("About")}>Navigera till Om-sidan</Button> */}
    </View>
  );
}
