import { StyleSheet, Text, View } from "react-native";

export const EncabezadoHero = ({ titulo, subtitulo }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 15,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 15,
    color: "#8E8E93",
    lineHeight: 22,
  },
});
