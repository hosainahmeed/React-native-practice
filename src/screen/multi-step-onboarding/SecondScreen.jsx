import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SecondScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.teamImage}
          source={require('../../assets/Team-goals-amico.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>Welcome to Goal Hub!</Text>
        <Text style={styles.smallText}>
          Connect securely with potential foster parents through our app.
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={[styles.button, styles.skipButton]}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Third')}
          style={[styles.button, styles.continueButton]}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ThirdScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.teamImage}
          source={require('../../assets/goalhubImage.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>Hey! Welcome</Text>
        <Text style={styles.smallText}>
          Where every Goal Hub journey begins.
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={[styles.button, styles.skipButton]}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={[styles.button, styles.continueButton]}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export {SecondScreen, ThirdScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  teamImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  text: {
    color: '#111',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallText: {
    color: '#737373',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  skipButton: {
    backgroundColor: '#ccc',
  },
  continueButton: {
    backgroundColor: '#4F5560',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
  },
});
