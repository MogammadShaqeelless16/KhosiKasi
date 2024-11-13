import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ToolItem = ({ tool, onUnlock }) => {
  return (
    <View style={styles.toolItem}>
      <Image source={{ uri: tool.image }} style={styles.toolImage} />
      {tool.isLocked ? (
        <>
          <View style={styles.lockedOverlay} />
          <Text style={styles.lockedText}>Locked</Text>
          <Text style={styles.unlockText}>Complete "{tool.requiredCourse}" to Unlock</Text>
        </>
      ) : (
        <Text style={styles.toolText}>{tool.name}</Text>
      )}
    </View>
  );
};

const ToolsSection = ({ tools }) => {
  return (
    <View style={styles.toolsContainer}>
      {tools.map((tool, index) => (
        <ToolItem key={index} tool={tool} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  toolItem: {
    width: '45%',
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  toolImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  toolText: {
    fontSize: 14,
    color: '#007BFF',
  },
  lockedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  lockedText: {
    position: 'absolute',
    top: '40%',
    color: '#fff',
    fontSize: 16,
  },
  unlockText: {
    position: 'absolute',
    top: '60%',
    color: '#fff',
    fontSize: 12,
  },
});

export default ToolsSection;
