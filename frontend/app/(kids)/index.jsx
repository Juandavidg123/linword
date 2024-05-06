import FixView from "@/components/basic/FixView";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, Chip, Avatar, Appbar } from "react-native-paper";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Page() {
  return (
    <FixView>
      <View style = {{ flex: 1, backgroundColor: "#FEFBF6" }}>
        <View style = {styles.container}>
          <Chip elevation={5} onPress={() => console.log("Pressed")}>
            Gays
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
                uri: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/06/15/el-patito-feo.jpeg",
              }}
            />
            <Card.Actions>
              <Button onPress={() => console.log("presione")}>
                Cancel
              </Button>
              <Button onPress={() => console.log("presione")}>
                Ok
              </Button>
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
