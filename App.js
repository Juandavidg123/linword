import { StatusBar } from "expo-status-bar";
import { StyleSheet,  View } from "react-native";
import { Avatar, Button, Card, Text, Chip } from "react-native-paper";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#265073" }}>
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
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button onPress={() => console.log("Puto el que presione")}> Cancel </Button>
            <Button onPress={() => console.log("Puto el que presione")}> Ok </Button>
          </Card.Actions>
        </Card>
      </View>

      <Text>Hello world!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop:40,
    gap: 35,
    justifyContent: "center",
  },

  card:{
    marginTop: 50,
  }

});
