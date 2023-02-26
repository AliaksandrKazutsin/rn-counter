import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import NavigationScreen from './NavigationScreen';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
            screenOptions={{
                headerShown: false, 
            }}
      >
        <Tab.Screen 
            name="First screen" 
            component={NavigationScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={32} />
              ),
        }} />
        <Tab.Screen 
            name="Second screen" 
            component={NavigationScreen}
            options={{
              tabBarLabel: 'User',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" color={color} size={32} />
              ),
        }} />
        <Tab.Screen 
            name="Third screen" 
            component={NavigationScreen}
            options={{
              tabBarLabel: 'Contacts',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="phone" color={color} size={32} />
              ),
        }} />
        <Tab.Screen 
          name="Fourth screen" 
          component={NavigationScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={32} />
            ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
