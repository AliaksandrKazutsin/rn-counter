import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CountScreen from './CountScreen';
 
const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First Screen">
        {props => 
          <CountScreen
            {...props} 
            nextScreen="Second Screen"
          />
        }
      </Stack.Screen>
      <Stack.Screen name="Second Screen">
        {props => 
          <CountScreen
            {...props} 
            nextScreen={null}
          />
        }
      </Stack.Screen> 
    </Stack.Navigator>
  );
};

export default NavigationScreen;
