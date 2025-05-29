import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{title: 'Home Page'}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="About" component={About} />
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