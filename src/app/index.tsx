import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BotonPrincipal } from "../components/BotonPrincipal";
import { EncabezadoHero } from "../components/EncabezadoHero";
import { IlustracionHero } from "../components/IlustracionHero";
import { Logotipo } from "../components/Logotipo";

export default function PantallaInicio() {
  return (
    <SafeAreaView style={styles.pantalla}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Componente 1: Logotipo superior */}
      <Logotipo />

      {/* Componente 2: Figura 3D central */}
      <IlustracionHero />

      {/* Componente 3: Título y subtítulo */}
      <EncabezadoHero
        titulo="Jump start your crypto portfolio"
        subtitulo="Take your investment portfolio to next level"
      />

      {/* Componente 4: Botón de acción */}
      <BotonPrincipal
        texto="Get Started"
        alPresionar={() => console.log("Botón presionado")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
});
