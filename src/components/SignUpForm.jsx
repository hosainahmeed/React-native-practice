// SignUpForm.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomInput from './CustomInput';
import { useNavigation } from '@react-navigation/native';


const SignUpForm = ({onSubmit, onLoginPress}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation()

  const handleSignUp = () => {
    // Add validation logic here if needed
    onSubmit &&
      onSubmit({fullName, email, phoneNumber, password, confirmPassword});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Hello! let’s join with us</Text>

      <CustomInput
        label="Full Name"
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
      />
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        label="Phone number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomInput
        label="Confirm Password"
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={onLoginPress}>
          <Text onPress={()=>navigation.navigate('Login')} style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 4,
  },
  subtitle: {
    marginBottom: 24,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#444',
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontWeight: 'bold',
  },
});

export default SignUpForm;
