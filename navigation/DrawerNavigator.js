import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import supabase from '../supabaseClient';
import { fetchProfile } from '../component/UserOperations/fetchProfile';

import Settings from '../screens/Settings';  // Settings screen
import ExternalResources from '../screens/ExternalResources';  // External Resources screen
import AwardsCertificates from '../screens/AwardsCertificates';  // Awards / Certificates screen
import ContactUs from '../screens/ContactUs';  // Contact Us screen
import Help from '../screens/Help';  // Help screen
import HomeTabs from './HomeTabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  const [profile, setProfile] = useState({
    first_name: '',
    profile_picture_url: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session) {
      console.log('No active session found, user not logged in');
      return;
    }

    setIsLoggedIn(true);
    console.log('User is logged in:', session.user.id);

    try {
      const userProfile = await fetchProfile(session.user.id);
      if (userProfile) {
        setProfile({
          first_name: userProfile.first_name,
          profile_picture_url: userProfile.profile_picture_url,
        });
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
      Alert.alert('Error', 'Error fetching profile data');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const CustomDrawerItem = ({ label, icon, onPress }) => (
    <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
      {icon}
      <Text style={styles.drawerItemLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.profileContainer}>
          {isLoggedIn ? (
            <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
              <Image source={{ uri: profile.profile_picture_url }} style={styles.profileImage} />
              <Text style={styles.profileName}>{profile.first_name || 'User Name'}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>You are not logged in</Text>
              <TouchableOpacity style={styles.authButton} onPress={handleLogin}>
                <Ionicons name="log-in" size={20} color="#fff" />
                <Text style={styles.authButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.authButton} onPress={handleSignUp}>
                <Ionicons name="person-add" size={20} color="#fff" />
                <Text style={styles.authButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.drawerItemsContainer}>
          <CustomDrawerItem
            label="Settings"
            icon={<Ionicons name="settings" size={20} color="#007BFF" />}
            onPress={() => props.navigation.navigate('Settings')}
          />
          <CustomDrawerItem
            label="External Resources"
            icon={<Ionicons name="globe" size={20} color="#007BFF" />}
            onPress={() => props.navigation.navigate('ExternalResources')}
          />
          <CustomDrawerItem
            label="Awards / Certificates"
            icon={<Ionicons name="medal" size={20} color="#007BFF" />}
            onPress={() => props.navigation.navigate('AwardsCertificates')}
          />
          <CustomDrawerItem
            label="Contact Us"
            icon={<Ionicons name="call" size={20} color="#007BFF" />}
            onPress={() => props.navigation.navigate('ContactUs')}
          />
        </View>

        <View style={styles.bottomDrawerSection}>
          <CustomDrawerItem
            label="Help"
            icon={<Ionicons name="help-circle" size={20} color="#007BFF" />}
            onPress={() => props.navigation.navigate('Help')}
          />
          <CustomDrawerItem
            label="Logout"
            icon={<Ionicons name="log-out" size={20} color="#007BFF" />}
          />
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="ExternalResources" component={ExternalResources} />
      <Drawer.Screen name="AwardsCertificates" component={AwardsCertificates} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
    justifyContent: 'center',
  },
  authButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  drawerItemsContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  drawerItemLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  bottomDrawerSection: {
    borderTopColor: '#f0f4f8',
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
