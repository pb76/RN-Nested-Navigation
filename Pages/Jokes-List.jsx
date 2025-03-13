import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";

export default function JokesListScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Skämtlista</Text>
      {/* <Button onPress={() => navigation.navigate("Home")}>Gå till Hemskärmen</Button> */}
      <Button onPress={() => navigation.navigate("JokesDetails")}>Gå till Skämtdetaljerna</Button>
    </View>
  );
}
