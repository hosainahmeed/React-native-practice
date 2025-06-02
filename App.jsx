import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import About from './src/component/About';
import Contact from './src/component/Contact';
import {StatusBar} from 'react-native';
import Login from './src/screen/Login';
import Home from './src/component/Home';
import { SecondScreen, ThirdScreen } from './src/screen/multi-step-onboarding/SecondScreen';
import FirstScreen from './src/screen/multi-step-onboarding/FirstScreen';
import SplashScreen from 'react-native-splash-screen';

// Import the new onboarding screens

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="First">
        {/* Loader (First onboarding) */}
        <Stack.Screen
          options={{headerShown: false}}
          name="First"
          component={FirstScreen}
        />

        {/* Onboarding Step 2 */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Second"
          component={SecondScreen}
        />

        {/* Onboarding Step 3 */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Third"
          component={ThirdScreen}
        />

        {/* Your other screens */}
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
