import { Image, StyleSheet, View } from "react-native";

export const IlustracionHero = () => {
  return (
    <View style={styles.contenedor}>
      <Image
        source={require("../assets/figura-3d.png")}
        style={styles.imagen}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  imagen: {
    width: "100%",
    height: 320,
  },
});
