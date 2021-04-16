import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
// redux
import reducers from './reducers'
// componets
import MainMenu from './components/MainMenu'
import QuizBuilder from './components/QuizBuilder'
import QuizPage from './components/QuizPage'
import Details from './components/Details'

const store = createStore(reducers)
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MainMenu' component={MainMenu} />
          <Stack.Screen name='QuizBuilder' component={QuizBuilder} />
          <Stack.Screen name='QuizPage' component={QuizPage} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
