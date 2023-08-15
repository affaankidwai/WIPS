import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanning(false);
    setScannedData(data);
  };

  const toggleScanner = () => {
    if (!scanning) {
      setScannedData(null);
    }
    setScanning(!scanning);
  };

  if (hasPermission === null) {
    return <Text>Requesting permission to access camera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  return (
    <View style={styles.container}>
      {scanning ? (
        <BarCodeScanner
          onBarCodeScanned={scanning ? handleBarCodeScanned : undefined}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            {scannedData
              ? `Scanned Data: ${scannedData}`
              : 'Tap the button to start scanning'}
          </Text>
          <Button title={scanning ? 'Stop Scanning' : 'Start Scanning'} onPress={toggleScanner} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  messageText: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
