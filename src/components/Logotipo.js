import { View, Text, StyleSheet } from 'react-native';

export const Logotipo = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>
        Crypt<Text style={styles.resaltado}>X</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    paddingTop: 10,
  },
  texto: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  resaltado: {
    color: '#826BF9',
  },
});
