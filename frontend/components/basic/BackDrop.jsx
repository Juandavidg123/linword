import { View, Animated, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const height = Dimensions.get("window").height;
const HEIGHT_BACKDROP = height * 0.5;

const width = Dimensions.get("window").width;
const WIDTH_SCREEN = width * 0.7;

export const book_cover = [
  "https://www.ecured.cu/images/0/06/Los-tres-cerditos.jpg",
  "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/11/11/pinocho.jpeg",
  "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/06/15/el-patito-feo.jpeg",
];

const BackDrop = ({ scrollX }) => {
  return (
    <View
      style={
        ([{ height: HEIGHT_BACKDROP, width, position: "absolute", top: 0 }],
        StyleSheet.absoluteFillObject)
      }
    >
      {book_cover.map((img, i) => {
        const inputRange = [
          (i - 1) * WIDTH_SCREEN,
          i * WIDTH_SCREEN,
          (i + 1) * WIDTH_SCREEN,
        ];

        const outputRange = [0, 1, 0];

        const opacity = scrollX.interpolate({ inputRange, outputRange });

        return (
          <Animated.Image
            source={{ uri: img }}
            key={i}
            blurRadius={10}
            style={[
              {
                height: HEIGHT_BACKDROP,
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
        style={{ height: HEIGHT_BACKDROP, width, position: "absolute", top: 0 }}
      />
    </View>
  );
};

export default BackDrop;

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
