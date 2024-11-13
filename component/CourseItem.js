import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from './ProgressBar'; // Importing the ProgressBar component

const CourseItem = ({ item }) => {
  return (
    <View style={styles.courseItem}>
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <ProgressBar progress={item.progress} />
        {item.badges.length > 0 && (
          <View style={styles.badgesContainer}>
            {item.badges.map((badge, index) => (
              <View key={index} style={styles.badge}>
                <Text style={styles.badgeText}>{badge}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseItem: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  courseImage: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  courseInfo: {
    marginLeft: 15,
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  badgesContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default CourseItem;
