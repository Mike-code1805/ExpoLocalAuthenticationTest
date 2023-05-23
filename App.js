import { StyleSheet, Text, View } from 'react-native';
import { AuthScreen, PassSreen } from './src/screens';
import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [isBiometricSupport, setIsBiometricSupport] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupport(compatible);
    })();
  }, []);

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter password',
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
      console.log({ result });
    });
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? <PassSreen onLogout={() => setIsAuthenticated(false)} /> : <AuthScreen onAuthenticate={onAuthenticate} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
