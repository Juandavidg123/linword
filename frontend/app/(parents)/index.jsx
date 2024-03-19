import FixView from "@/components/basic/FixView";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, Chip, Avatar } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Page() {
  return (
    <FixView>
      <View style={{ flex: 1, backgroundColor: "#FEFBF6" }}>
        <View style={styles.container}>
          <Chip elevation={5} onPress={() => console.log("Pressed")}>
            Principal
          </Chip>
          <Chip elevation={5} onPress={() => console.log("Pressed")}>
            Libros
          </Chip>
          <Chip elevation={5} onPress={() => console.log("Pressed")}>
            Preferencias
          </Chip>
        </View>

        <View style={styles.card}>
          <Card>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: "https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-tres-cerditos_23-2149856074.jpg?t=st=1670950763~exp=1670951363~hmac=87effe82c8d8add0280081f97a98e6e6fd5c28a15f7ec02c45deeb7834f5c4fb",
              }}
            />
            <Card.Actions>
              <Button onPress={() => console.log("presione")}>Cancel</Button>
              <Button onPress={() => console.log("presione")}>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
      </View>
    </FixView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 40,
    gap: 35,
    justifyContent: "center",
  },

  card: {
    marginTop: 50,
  },
});
