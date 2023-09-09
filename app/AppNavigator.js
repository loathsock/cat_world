// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Index from './screens/index.js'; // Import your screens
import Testing from './screens/testing.js'; // Import your screens
import Main from './screens/main.js'; // Import your screens
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const  AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{headerShown: false}} />
        <Stack.Screen name="main" component={Main} options={{headerShown: false}} />  
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;