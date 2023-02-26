import React from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';

import { useCounter } from './hook';

interface NavigationScreen {
  nextScreen: string | null
}

const CountScreen = ({ nextScreen }: NavigationScreen) => {
  const { count } = useCounter();
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.center}>
      <View>
        <Text style={{ fontSize: 20, paddingBottom: 20 }}>Count: {count}</Text>
      </View> 
        {nextScreen ? 
          <View>
             <Button title="Next screen" onPress={() => navigate(nextScreen)} />
          </View>
        : null} 
    </View>
  );
};

export default CountScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
