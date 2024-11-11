import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EducationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Education and Learning</Text>
      <Text style={styles.subtitle}>Explore learning materials to help grow your skills and knowledge!</Text>

      <Button
        title="Start Learning"
        onPress={() => navigation.navigate('ModuleList')} // You can create a module list screen for learning
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
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

export default EducationScreen;
