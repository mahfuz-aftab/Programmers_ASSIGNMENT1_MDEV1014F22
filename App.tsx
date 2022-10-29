import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderPage from './src/components/HeaderPage';
import LoginPage from './src/components/LoginPage';
import SignupPage from './src/components/SignupPage';
import HomePage from './src/components/HomePage';
import NewsChannelListPage from './src/components/NewsChannelListPage';
import NewsListPage from './src/components/NewsListPage';
import NewsDetailsPage from './src/components/NewsDetailsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HeaderPage></HeaderPage>
      <Stack.Navigator initialRouteName="Login Page">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Sign Up" component={SignupPage} />
        <Stack.Screen name="Newz Channels" component={NewsChannelListPage} />
        <Stack.Screen name="All Newz" component={NewsListPage} />
        <Stack.Screen name="Newz Details" component={NewsDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}