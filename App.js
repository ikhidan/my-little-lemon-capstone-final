import * as React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from './screens/Header';
import Footer from './screens/Footer';
import Onboarding from './screens/Onboarding';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('little_lemon');

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
    <NavigationContainer>
    <View style={styles.container}>
        <Header/>
        <Stack.Navigator initialRouteName="Get Started"
          screenOptions={{ headerStyle: { backgroundColor: '#FBDABB'} }}>
            <Stack.Screen name= "Profile" component={ProfileScreen} options={{ title: 'Profile Information'}}/>
            < Stack.Screen name="Home" component={HomeScreen}/> 
            <Stack.Screen name="Get Started" component={Onboarding}/>
          </Stack.Navigator>
      </View>

      <View style={styles.footer}>
        <Footer/>
      </View>
    </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
