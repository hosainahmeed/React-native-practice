import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import About from './src/component/About';
import Contact from './src/component/Contact';
import {StatusBar} from 'react-native';
import Login from './src/screen/Login';
import Home from './src/component/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{title: 'Contact Page', headerShown: false}}
          name="Contact"
          component={Contact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
