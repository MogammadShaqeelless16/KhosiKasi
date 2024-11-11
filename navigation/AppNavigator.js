import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OnboardingScreen from './OnboardingNavigator';
import DrawerNavigator from './DrawerNavigator'; // Main app drawer
import HomeScreen from '../screens/HomeScreen'; // Home Screen
import EducationScreen from '../screens/EducationScreen'; // Education Screen
import DownloadScreen from '../screens/DownloadScreen'; // Download Screen
import Profile from '../screens/Profile';
import Login from '../screens/Login'; // Login screen

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const status = await AsyncStorage.getItem('onboardingCompleted');
        setIsOnboardingComplete(status === 'true');
      } catch (error) {
        console.error('Failed to check onboarding status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      setIsOnboardingComplete(true);
    } catch (error) {
      console.error('Failed to set onboarding status:', error);
    }
  };

  if (isLoading) {
    return null; // Loading screen can go here
  }

  return (
    <Stack.Navigator>
      {!isOnboardingComplete ? (
        <Stack.Screen name="Onboarding" options={{ headerShown: false }}>
          {(props) => <OnboardingScreen {...props} onComplete={handleOnboardingComplete} />}
        </Stack.Screen>
      ) : (
        <>
          {/* This Stack Screen renders the DrawerNavigator, which includes Bottom Tabs */}
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigatorWithTabs}
            options={{ headerShown: false }} 
          />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
};

const DrawerNavigatorWithTabs = () => {
  return (
    <DrawerNavigator>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeScreen') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'EducationScreen') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'DownloadScreen') {
              iconName = focused ? 'download' : 'download-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="EducationScreen" component={EducationScreen} />
        <Tab.Screen name="DownloadScreen" component={DownloadScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </DrawerNavigator>
  );
};

export default AppNavigator;
