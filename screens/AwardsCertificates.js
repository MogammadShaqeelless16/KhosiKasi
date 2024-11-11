import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AwardsCertificates = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Awards & Certificates</Text>
      <Text style={styles.subtitle}>
        Here you can view your awards, certificates, and other achievements.
      </Text>
      {/* You can add content like images, lists, etc. */}
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
});

export default AwardsCertificates;
