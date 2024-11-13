import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModuleDetails = ({ route }) => {
  const { moduleName } = route.params;

  // Function to save certificate name in AsyncStorage
  const saveCertificateName = async (certificateName) => {
    try {
      const existingCertificates = await AsyncStorage.getItem('certificates');
      const certificates = existingCertificates ? JSON.parse(existingCertificates) : [];
      certificates.push(certificateName);
      await AsyncStorage.setItem('certificates', JSON.stringify(certificates));
    } catch (error) {
      console.error('Error saving certificate:', error);
    }
  };

  // Function to create and save a PDF certificate
  const saveCertificateAsPDF = async () => {
    const pdfContent = `Certificate of Completion\n\nThis certifies that you have completed the module: ${moduleName}`;
    const pdfPath = `${FileSystem.documentDirectory}${moduleName}-Certificate.pdf`;

    try {
      await FileSystem.writeAsStringAsync(pdfPath, pdfContent, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      // Save the certificate name to AsyncStorage for listing in AwardsCertificates
      await saveCertificateName(`${moduleName}-Certificate.pdf`);
      alert(`Certificate saved as PDF at ${pdfPath}`);
    } catch (error) {
      console.error('Error saving certificate as PDF:', error);
      alert('Failed to save the certificate.');
    }
  };

  // Function to share the PDF certificate
  const sharePDF = async () => {
    const pdfPath = `${FileSystem.documentDirectory}${moduleName}-Certificate.pdf`;
    const fileExists = await FileSystem.getInfoAsync(pdfPath);

    if (fileExists.exists && (await Sharing.isAvailableAsync())) {
      await Sharing.shareAsync(pdfPath);
    } else {
      alert('PDF does not exist or sharing is not available on this platform.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{moduleName} Details</Text>
      <Button title="Save Certificate as PDF" onPress={saveCertificateAsPDF} />
      <Button title="Share Certificate" onPress={sharePDF} />
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
    marginBottom: 20,
  },
});

export default ModuleDetails;
