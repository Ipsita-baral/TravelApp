import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './src/screens/FirstPage';
import HomePage from './src/screens/HomePage';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='firstpage'>
        <Stack.Screen name='home' component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name='firstpage' component={FirstPage} options={{headerShown:false}}/>
        <Stack.Screen name='details' component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;