import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Animated,
  ScrollView,
} from "react-native";
import { Button, Text, Divider, Chip } from "react-native-paper";
import BackDrop, { book_cover } from "@/components/basic/BackDrop";
import logo from "@/assets/icon.png";

const width = Dimensions.get("window").width;
const WIDTH_SCREEN = width * 0.7;
const GAP_LATERAL = (width - WIDTH_SCREEN) / 2;

export default function Page() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.SafeAreaView}>
      <BackDrop scrollX={scrollX} />
      <View>
        <Text style={styles.TitleTop}>
          <Image style={styles.logo} source={logo} />
          Linword
        </Text>
      </View>
      <ScrollView>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          data={book_cover}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: GAP_LATERAL,
          }}
          decelerationRate={0}
          snapToInterval={WIDTH_SCREEN}
          scrollEventThrottle={16}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * WIDTH_SCREEN,
              index * WIDTH_SCREEN,
              (index + 1) * WIDTH_SCREEN,
            ];

            const outputRange = [0, -50, 0];

            const translateY = scrollX.interpolate({ inputRange, outputRange });

            return (
              <View style={{ width: WIDTH_SCREEN }}>
                <Animated.View
                  style={{
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 35,
                    backgroundColor: "white",
                    alignItems: "flex-start",
                    transform: [{ translateY }],
                  }}
                >
                  <Image source={{ uri: item }} style={styles.ListadoLibros} />
                </Animated.View>
              </View>
            );
          }}
        />
        <View>
          <Text style={styles.Title}>Descubrir</Text>
          <Divider />
        </View>
        <View style={styles.chipi}>
          <Chip elevation={5} onPress={() => console.log("Pressed")}>
            Animales
          </Chip>
          <Chip elevation={5} onPress={() => console.log("Pressed")}>
            Espacial
          </Chip>
          <Chip elevation={5} onPress={() => console.log("Pressed")}>
            Aventuras
          </Chip>
        </View>
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
            <Button
              style={styles.Botonleer}
              icon="glasses"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Leer
            </Button>
            <Button
              style={styles.Botonleer}
              icon="glasses"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
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
            <Button
              style={styles.Botonleer}
              icon="glasses"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Leer
            </Button>
            <Button
              style={styles.Botonleer}
              icon="glasses"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Leer
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Description: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  SafeAreaView: {
    marginTop: 10,
    backgroundColor: "white",
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
  portadas: {
    width: 150,
    height: 200,
    backgroundColor: "blue",
    resizeMode: "cover",
    borderRadius: 24,
    gap: 50,
    marginBottom: 0,
  },
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TitleTop: {
    fontSize: 32,
    height: 70,
  },
  logo: {
    width: 50,
    height: 50,
  },
  Title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 36,
  },
  ListadoLibros: {
    width: "100%",
    height: WIDTH_SCREEN * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  chipi: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 40,
    gap: 35,
    justifyContent: "center",
  },
});
