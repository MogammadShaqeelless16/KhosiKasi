import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const modules = [
  { id: '1', title: 'Budgeting 101', description: 'Learn the basics of budgeting and managing your finances.' },
  { id: '2', title: 'Intro to Finance', description: 'Understand core financial principles.' },
  { id: '3', title: 'Sales Skills', description: 'Develop skills to boost sales and business growth.' },
  { id: '4', title: 'Inventory Management', description: 'Learn how to manage stock effectively.' },
  { id: '5', title: 'Analytics for Growth', description: 'Gain insights into business analytics.' },
];

const EducationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Education and Learning</Text>
      <Text style={styles.subtitle}>Explore learning materials to help grow your skills and knowledge!</Text>

      {/* Module List */}
      <FlatList
        data={modules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.moduleItem}
            onPress={() => navigation.navigate('ModuleDetails', { module: item })}
          >
            <Text style={styles.moduleTitle}>{item.title}</Text>
            <Text style={styles.moduleDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  moduleItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 8,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  moduleDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default EducationScreen;
