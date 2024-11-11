import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DownloadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Download Resources</Text>
      <Text style={styles.subtitle}>Download the latest resources for your business or learning needs!</Text>

      <Button title="Download Materials" onPress={() => alert('Downloading...')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcedc8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
});

export default DownloadScreen;
