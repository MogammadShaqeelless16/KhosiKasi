import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Dummy Data for Carousel and Courses
const courses = [
  { id: 1, title: 'Course 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s' },
  { id: 2, title: 'Course 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s' },
  { id: 3, title: 'Course 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s' },
  { id: 4, title: 'Course 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1En_1TeH-DMc3RO62yNMb9V9_7M0myrs2EA&s' },
];

const quickLinks = [
  { id: 1, icon: 'book', label: 'Courses' },
  { id: 2, icon: 'videocam', label: 'Videos' },
  { id: 3, icon: 'chatbubbles', label: 'Chat' },
  { id: 4, icon: 'person', label: 'Profile' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Hamburger Icon for Navigation */}
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

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for courses or content..."
        placeholderTextColor="#aaa"
      />

      {/* Course Carousel */}
      <Text style={styles.sectionTitle}>Featured Courses</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {courses.map((course) => (
          <View key={course.id} style={styles.carouselItem}>
            <Image source={{ uri: course.image }} style={styles.carouselImage} />
            <Text style={styles.carouselItemText}>{course.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Quick Links Row */}
      <Text style={styles.sectionTitle}>Quick Links</Text>
      <View style={styles.quickLinksContainer}>
        {quickLinks.map((link) => (
          <TouchableOpacity key={link.id} style={styles.quickLinkItem}>
            <Ionicons name={link.icon} size={30} color="#007BFF" />
            <Text style={styles.quickLinkLabel}>{link.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Popular Courses Section */}
      <Text style={styles.sectionTitle}>Our Popular Courses</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.popularCourseItem}>
            <Image source={{ uri: item.image }} style={styles.popularCourseImage} />
            <Text style={styles.popularCourseTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50, // Adjusted for the top bar with icons
  },
  title: {
    fontSize: 24,
    paddingTop: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
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
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 40,
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
  carousel: {
    marginLeft: 10,
  },
  carouselItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  carouselImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  carouselItemText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  quickLinkItem: {
    alignItems: 'center',
  },
  quickLinkLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
  popularCourseItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  popularCourseImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  popularCourseTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
});

export default HomeScreen;
