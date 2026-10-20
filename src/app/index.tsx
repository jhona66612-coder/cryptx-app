import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PantallaInicio } from '../pages/PantallaInicio';

export default function App() {
  return (
    <SafeAreaProvider>
      <PantallaInicio />
    </SafeAreaProvider>
  );
}
