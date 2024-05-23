import FixView from "@/components/basic/FixView";
import { Text, Button } from "react-native-paper";
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Animated,
  ScrollView,
} from "react-native";

const index = () => {
  return (
    <FixView>
      <ScrollView>
      <View
        style={{
          backgroundColor: "#F7F2FA",
          borderRadius: 35,
          marginTop: 10,
        }}
      >
        <View style={styles.books}>
          <Image
            style={styles.portadas}
            source={{
              uri: "https://ele.chaco.gob.ar/pluginfile.php/519682/mod_book/chapter/4248/514a982f7918efbb29d89fa933d6cd1a.jpg",
            }}
          />
          <Image
            style={styles.portadas}
            source={{
              uri: "https://creacuento.com/wp-content/uploads/la-princesa-de-fuego.webp",
            }}
          />
        </View>
        <View style={styles.Botones}>
          <Button style={styles.Botonleer} icon="glasses" mode="contained">
            Leer
          </Button>
          <Button style={styles.Botonleer} icon="glasses" mode="contained">
            Leer
          </Button>
        </View>
        <View style={styles.books}>
          <Image
            style={styles.portadas}
            source={{
              uri: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387077522i/19471915.jpg",
            }}
          />
          <Image
            style={styles.portadas}
            source={{
              uri: "https://www.picarona.net/wp-content/uploads/2016/01/20150701101706.jpg",
            }}
          />
        </View>
        <View style={styles.Botones}>
          <Button style={styles.Botonleer} icon="glasses" mode="contained">
            Leer
          </Button>
          <Button style={styles.Botonleer} icon="glasses" mode="contained">
            Leer
          </Button>
        </View>
        <View style={styles.books}>
          <Image
            style={styles.portadas}
            source={{
              uri: "https://images.cdn1.buscalibre.com/fit-in/360x360/f6/5e/f65e3fedc2a233b39a63403c0fe28bb5.jpg",
            }}
          />
          <Image
            style={styles.portadas}
            source={{
              uri: "https://images.cdn1.buscalibre.com/fit-in/360x360/43/b0/43b064a77a3e56ad9b0f16ed2f21a1f6.jpg",
            }}
          />
        </View>
        <View style={styles.Botones}>
          <Button style={styles.Botonleer} icon="glasses" mode="contained">
            Leer
          </Button>
          <Button style={styles.Botonleer} icon="glasses" mode="contained">
            Leer
          </Button>
        </View>
      </View>
      </ScrollView>
    </FixView>
  );
};

const styles = StyleSheet.create({
  books: {
    flexDirection: "row",
    marginTop: 25,
    width: 380,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 35,
    gap: 50,
    backgroundColor: "#F7F2FA",
    alignItems: "flex-start",
  },
  portadas: {
    width: 150,
    height: 200,
    backgroundColor: "blue",
    resizeMode: "cover",
    borderRadius: 24,
    gap: 50,
    marginBottom: 0,
  },
  Botones: {
    flexDirection: "row",
    gap: 75,
    marginLeft: 25,
  },
  Botonleer: {
    marginTop: 0,
    marginLeft: 25,
    marginBottom: 10,
  },
});

export default index;
