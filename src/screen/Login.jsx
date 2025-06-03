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
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import BarndIcon from '../components/BarndIcon';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert('Success', 'Logged in successfully!');
    setEmail('');
    setPassword('');
    navigation.navigate('Home');
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
                label="Email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />

              <CustomInput
                label="Password"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />
              <CustomButton
                text="Login"
                onPress={handleLogin}
                style={styles.loginButton}
              />

              <View style={styles.optionsRow}>
                <Pressable
                  style={styles.checkboxContainer}
                  onPress={() => setRememberMe(!rememberMe)}
                  android_ripple={{color: 'rgba(0,0,0,0.1)', borderless: true}}
                  hitSlop={8}>
                  <View
                    style={[
                      styles.checkbox,
                      rememberMe && styles.checkboxChecked,
                    ]}>
                    {rememberMe && <View style={styles.checkboxInner} />}
                  </View>
                </Pressable>
                <Text style={styles.checkboxLabel}>Remember Me</Text>

                <TouchableOpacity
                  onPress={() => {
                    /* Add forgot password logic */
                  }}>
                  <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <BarndIcon />
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subtitle}>Login to continue</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text style={styles.separatorText}>
                Don’t have an account?{' '}
                <Text
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}
                  style={styles.signUpText}>
                  Sign Up
                </Text>
              </Text>
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
    backgroundColor: '#e6f0ff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    maxWidth: 360,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003366',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#4d79ff',
    marginTop: 4,
    marginBottom: 24,
  },
  form: {
    width: '100%',
    gap: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 3,
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: 13,
    marginLeft: 6,
    marginTop: -12,
    marginBottom: 6,
  },
  loginButton: {
    backgroundColor: '#3366ff',
    borderRadius: 14,
    paddingVertical: 14,
    shadowColor: '#3366ff',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'center',
    gap: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#3366ff',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f0ff',
  },
  checkboxChecked: {
    backgroundColor: '#3366ff',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#003366',
    fontWeight: '600',
  },
  forgotPassword: {
    fontSize: 15,
    color: '#3366ff',
    fontWeight: '600',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  separatorText: {
    color: '#003366',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpText: {
    color: '#4d79ff',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
