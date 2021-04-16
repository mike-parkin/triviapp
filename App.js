import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import MainMenu from './components/MainMenu'
import QuizBuilder from './components/QuizBuilder'
import QuizPage from './components/QuizPage'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainMenu' component={MainMenu} />
        <Stack.Screen name='QuizBuilder' component={QuizBuilder} />
        <Stack.Screen name='QuizPage' component={QuizPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
