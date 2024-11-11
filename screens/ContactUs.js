import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>
        If you have any questions or concerns, feel free to reach out to us.
      </Text>

      {/* Example contact details */}
      <Text style={styles.contactText}>Email: support@example.com</Text>
      <Text style={styles.contactText}>Phone: +1 123 456 7890</Text>

      {/* Call to Action */}
      <TouchableOpacity onPress={() => alert('Sending message...')}>
        <Text style={styles.contactButton}>Send a Message</Text>
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
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  contactButton: {
    color: '#007BFF',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default ContactUs;
