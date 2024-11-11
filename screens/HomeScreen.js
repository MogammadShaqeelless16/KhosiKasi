import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Text style={styles.subtitle}>Here you can see the latest news, updates, and more!</Text>

      {/* Add Hamburger Icon for Navigation */}
      <TouchableOpacity
        style={styles.hamburgerIcon}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={30} color="#007BFF" />
      </TouchableOpacity>

      {/* Notification Bell Icon */}
      <TouchableOpacity
        style={styles.notificationIcon}
        onPress={() => alert('No new notifications!')}
      >
        <Ionicons name="notifications" size={30} color="#007BFF" />
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
    marginBottom: 20,
  },
  hamburgerIcon: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  notificationIcon: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
});

export default HomeScreen;
