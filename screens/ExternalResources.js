import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ExternalResources = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>External Resources</Text>
      <Text style={styles.subtitle}>
        Here you can find links to external resources and valuable materials.
      </Text>

      {/* Example Link */}
      <TouchableOpacity onPress={() => alert('Link to external resource')}>
        <Text style={styles.link}>Click here for External Resource</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default ExternalResources;
