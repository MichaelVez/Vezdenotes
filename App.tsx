import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import New from './src/screens/New';
import Notes from './src/screens/Notes';
import Home from './src/screens/Home';
import Training from './src/screens/Training';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Notes'} component={Notes} />
        <Stack.Screen name={'NewNote'} component={New} />
        <Stack.Screen name={'Training'} component={Training} />
        <Stack.Screen name={'NewTraining'} component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
