import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput } from 'react-native';
import CourseItem from '../component/CourseItem';
import ToolsSection from '../component/ToolItem';

// Dummy Data for Courses and Tools
const courses = [
  { id: 1, title: 'Course 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s', progress: 75, badges: ['Beginner'] },
  { id: 2, title: 'Course 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s', progress: 40, badges: ['Intermediate'] },
  { id: 3, title: 'Course 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s', progress: 90, badges: ['Advanced'] },
  { id: 4, title: 'Course 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s', progress: 20, badges: [] },
];

const tools = [
  { id: 1, name: 'Budget Calculator', image: 'https://via.placeholder.com/50', isLocked: false },
  { id: 2, name: 'Credit Score Checker', image: 'https://via.placeholder.com/50', isLocked: true, requiredCourse: 'Course 1' },
  { id: 3, name: 'Expense Tracker', image: 'https://via.placeholder.com/50', isLocked: true, requiredCourse: 'Course 2' },
  { id: 4, name: 'Expense Tracker', image: 'https://via.placeholder.com/50', isLocked: true, requiredCourse: 'Course 2' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>

            {/* Search Bar */}
            <TextInput
        style={styles.searchBar}
        placeholder="Search for courses or content..."
        placeholderTextColor="#aaa"
      />

            {/* Tools Section */}
      <Text style={styles.sectionTitle}>Tools</Text>
      <ToolsSection tools={tools} />


      {/* Courses with Progress */}
      <Text style={styles.sectionTitle}>My Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50, // Adjusted for the top bar with icons
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
  },
});

export default HomeScreen;
