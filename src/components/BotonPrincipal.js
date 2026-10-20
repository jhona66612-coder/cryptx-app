JavaScript;
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const BotonPrincipal = ({ texto, alPresionar }) => {
  return (
    <TouchableOpacity
      style={styles.boton}
      activeOpacity={0.8}
      onPress={alPresionar}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#6047F7",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    shadowColor: "#6047F7",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
});
