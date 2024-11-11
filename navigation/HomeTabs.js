import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Alert } from 'react-native';
import supabase from '../supabaseClient';
import { fetchProfile } from '../component/UserOperations/fetchProfile';

// Import your screens
import HomeScreen from '../screens/HomeScreen'; // Replace with your Home screen component
import EducationScreen from '../screens/EducationScreen'; // Replace with your Education screen component
import DownloadScreen from '../screens/DownloadScreen'; // Replace with your Download screen component
import Profile from '../screens/Profile';
import Login from '../screens/Login'; // Import the Login screen
import Loading from '../component/loadingComponent/loading';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const [profile, setProfile] = useState({
    first_name: '',
    profile_picture_url: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHustler, setIsHustler] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    setLoading(true);

    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session) {
      console.log('No active session found, user not logged in');
      setIsLoggedIn(false);
      setLoading(false);
      return;
    }

    setIsLoggedIn(true);
    console.log('User is logged in:', session.user.id);

    try {
      const userProfile = await fetchProfile(session.user.id);
      if (userProfile) {
        console.log('User profile fetched:', userProfile);
        setProfile({
          first_name: userProfile.first_name,
          profile_picture_url: userProfile.profile_picture_url,
        });
        setIsHustler(userProfile.roles.role_name === 'Hustler');
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
      Alert.alert('Error', 'Error fetching profile data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Education':
              iconName = 'book-outline'; // Or any other appropriate icon
              break;
            case 'Download':
              iconName = 'download-outline';
              break;
            case 'Profile':
            case 'Login': // Use the same icon for Profile and Login tabs
              iconName = 'person-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return (
            <View>
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: '#f5bb1b',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Education" component={EducationScreen} options={{ tabBarLabel: 'Education' }} />
      <Tab.Screen name="Download" component={DownloadScreen} options={{ tabBarLabel: 'Download' }} />
      {isLoggedIn ? (
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
      ) : (
        <Tab.Screen name="Login" component={Login} options={{ tabBarLabel: 'Login' }} />
      )}
    </Tab.Navigator>
  );
};

export default HomeTabs;
