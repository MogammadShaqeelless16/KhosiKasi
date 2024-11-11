import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const YouthEmployment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Youth Employment Opportunities</Text>
      <Text style={styles.subtitle}>
        If you have a handy skill, you can apply for part-time work!
      </Text>

      <Text style={styles.sectionTitle}>What You Need:</Text>
      <Text style={styles.bulletPoint}>• A valid South African ID or Passport.</Text>
      <Text style={styles.bulletPoint}>• Have a skill </Text>
      <Text style={styles.bulletPoint}>• Proof of Bank Details.</Text>
      
      <Text style={styles.sectionTitle}>Benefits:</Text>
      <Text style={styles.bulletPoint}>• Flexible hours to fit around your studies.</Text>
      <Text style={styles.bulletPoint}>• Gain work experience and earn money.</Text>
      <Text style={styles.bulletPoint}>• Join a supportive team and make a difference in your community.</Text>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#007BFF',
  },
  bulletPoint: {
    fontSize: 16,
    marginVertical: 4,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default YouthEmployment;
