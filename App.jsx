import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import About from './src/components/About';
import Contact from './src/components/Contact';
import {StatusBar} from 'react-native';
import Login from './src/screen/Login';
import Home from './src/components/Home';
import { SecondScreen, ThirdScreen } from './src/screen/multi-step-onboarding/SecondScreen';
import SplashScreen from 'react-native-splash-screen';
import SignUpForm from './src/components/SignUpForm';

// Import the new onboarding screens

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Second">


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
        <Stack.Screen name="SignUp" component={SignUpForm} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
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
