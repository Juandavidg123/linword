import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Animated,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Text, Divider, Chip } from "react-native-paper";

const portadasLibros = [
  "https://www.ecured.cu/images/0/06/Los-tres-cerditos.jpg",
  "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/11/11/pinocho.jpeg",
  "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/06/15/el-patito-feo.jpeg",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_PANTALLA = width * 0.7;
const ESPACIO_LATERAL = (width - ANCHO_PANTALLA) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function BackDrop({ scrollX }) {
  return (
    <View
      style={
        ([{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0 }],
        StyleSheet.absoluteFillObject)
      }
    >
      {portadasLibros.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_PANTALLA,
          index * ANCHO_PANTALLA,
          (index + 1) * ANCHO_PANTALLA,
        ];

        const outputRange = [0, 1, 0];

        const opacity = scrollX.interpolate({ inputRange, outputRange });

        return (
          <Animated.Image
            source={{ uri: imagen }}
            key={index}
            blurRadius={10}
            style={[
              {
                height: ALTURA_BACKDROP,
                width,
                position: "absolute",
                top: 0,
                opacity,
              },
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0 }}
      />
    </View>
  );
}

export default function Page() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.bookContainer}>
      <BackDrop scrollX={scrollX} />
      <View>
        <Text style={styles.TitleTop}>
          <Image style={styles.logo} source={require("@/assets/icon.png")} />
          Linword
        </Text>
      </View>
      <ScrollView>
        <StatusBar hidden />
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          data={portadasLibros}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: ESPACIO_LATERAL,
          }}
          decelerationRate={0}
          snapToInterval={ANCHO_PANTALLA}
          scrollEventThrottle={16}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ANCHO_PANTALLA,
              index * ANCHO_PANTALLA,
              (index + 1) * ANCHO_PANTALLA,
            ];

            const outputRange = [0, -50, 0];

            const translateY = scrollX.interpolate({ inputRange, outputRange });

            return (
              <View style={{ width: ANCHO_PANTALLA }}>
                <Animated.View
                  style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Description: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  SafeAreaView: {
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
  bookContainer: {
    marginBottom: 55,
    backgroundColor: "#FFF",
    borderRadius: 10,
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
    height: ANCHO_PANTALLA * 1.2,
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
