import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Desactiva encabezados y barras en todas las pantallas
      }}
    />
  );
}