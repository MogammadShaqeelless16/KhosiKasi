import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressContainer}>
      <Text style={styles.progressText}>{progress}% Completed</Text>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress}%`,
              backgroundColor: progress === 100 ? '#4CAF50' : '#FF9800', // Green for complete, Orange for in-progress
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    marginTop: 5,
  },
  progressText: {
    fontSize: 12,
    color: '#555',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 5,
  },
  progressFill: {
    height: 6,
    borderRadius: 5,
  },
});

export default ProgressBar;
