import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const qrSize = Math.min(width, height) * 0.8; // Increase the size here

export default function QrScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = () => {
    setScanning(false);
    navigation.navigate('Product'); 
  };

  const toggleScanner = () => {
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
      <View style={styles.cameraContainer}>
        {scanning && (
          <BarCodeScanner
            onBarCodeScanned={scanning ? handleBarCodeScanned : undefined}
            style={StyleSheet.absoluteFillObject}
          />
        )}
        {scanning && (
          <View style={styles.overlay}>
            <View style={styles.corner} />
          </View>
        )}
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          {scanning ? 'Scanning...' : 'Tap the button to start scanning'}
        </Text>
        <Button title={scanning ? 'Stop Scanning' : 'Start Scanning'} onPress={toggleScanner} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  corner: {
    width: 300,
    height: 300,
    borderColor: 'white',
    borderWidth: 2,
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  messageText: {
    marginBottom: 50,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
});
