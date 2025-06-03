/* eslint-disable react/no-unstable-nested-components */
import React, {memo, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as yup from 'yup';

import BarndIcon from '../components/BarndIcon';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await loginSchema.validate({email, password}, {abortEarly: false});
      setErrors({});
      Alert.alert('Success', 'Logged in successfully!');
      setEmail('');
      setPassword('');
      navigation.navigate('Home');
    } catch (err) {
      const errorObj = {};
      err.inner.forEach(e => {
        errorObj[e.path] = e.message;
      });
      setErrors(errorObj);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <FlatList
          contentContainerStyle={styles.scrollContent}
          data={[{key: 'form'}]}
          renderItem={() => (
            <View style={styles.form}>
              <CustomInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <CustomInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <CustomButton text="Login" onPress={handleLogin} />
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <BarndIcon />
            </View>
          )}
          ListFooterComponent={() => (
            <View>
              <View style={styles.separator}>
                <Text style={styles.separatorText}>Or</Text>
              </View>
              <View style={styles.separator}>
                <Text style={styles.separatorText}>
                  Don’t have an account? Sign up
                </Text>
              </View>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default memo(Login);
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f6ff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f6ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  separator: {
    alignItems: 'center',
    marginVertical: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    width: 300,
    textAlign: 'right',
    color: '#0F5E5B',
    fontWeight: 'bold',
    marginTop: 7,
  },
  separatorText: {
    color: '#0F5E5B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    maxWidth: 356,
    minWidth: 330,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F5E5B',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
    color: '#555',
  },
  form: {
    width: '100%',
    gap: 15,
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: 13,
    marginLeft: 5,
  },
});
