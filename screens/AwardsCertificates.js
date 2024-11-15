import React from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system'; // For mobile
import * as Sharing from 'expo-sharing'; // For mobile
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PDFDocument } from 'pdf-lib'; // For web

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

  // Function to create and save a PDF certificate (Mobile)
  const saveCertificateAsPDFMobile = async () => {
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

  // Function to create and save a PDF certificate (Web)
  const saveCertificateAsPDFWeb = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();

    // Add text to the PDF
    page.drawText('Certificate of Completion', {
      x: 50,
      y: height - 100,
      size: 30,
    });
    page.drawText(`This certifies that you have completed the module: ${moduleName}`, {
      x: 50,
      y: height - 150,
      size: 20,
    });

    // Serialize the PDF document to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF data and trigger the download
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${moduleName}-Certificate.pdf`;
    link.click();

    // Save the certificate name to AsyncStorage for listing in AwardsCertificates
    await saveCertificateName(`${moduleName}-Certificate.pdf`);
  };

  // Function to share the PDF certificate (Mobile)
  const sharePDF = async () => {
    if (Platform.OS === 'web') {
      alert('Sharing certificates is not available on the web.');
      return;
    }

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
      <Button
        title={Platform.OS === 'web' ? 'Download Certificate as PDF' : 'Save Certificate as PDF'}
        onPress={Platform.OS === 'web' ? saveCertificateAsPDFWeb : saveCertificateAsPDFMobile}
      />
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
