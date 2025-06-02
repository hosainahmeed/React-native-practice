import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const LoaderScreen = () => {
  // const opacity = useSharedValue(0);
  // const rotation = useSharedValue(0);
  // const navigation = useNavigation();

  // useEffect(() => {
  //   opacity.value = withTiming(1, {duration: 1000});
  //   rotation.value = withTiming(360, {
  //     duration: 1000,
  //     easing: Easing.out(Easing.exp),
  //   });
  // }, [opacity, rotation, navigation]);

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: opacity.value,
  //     transform: [
  //       {
  //         rotate: `${rotation.value}deg`,
  //       },
  //     ],
  //   };
  // });

  return (
    <LinearGradient
      colors={['#4F5560', '#FFFFFF']}
      style={styles.gradientBackground}>
      <ThirdScreen />
    </LinearGradient>
  );
};

export default LoaderScreen;

const FirstScreen = () => {
  const opacity = useSharedValue(0);
  const rotation = useSharedValue(0);
  const navigation = useNavigation();

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 1000});
    rotation.value = withTiming(360, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, [opacity, rotation, navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AnimatedImage
          style={[styles.image, animatedStyle]}
          source={require('../assets/goalhubImage.png')}
        />
      </View>
      <View style={styles.imageCover}>
        <Image
          style={styles.icon}
          source={require('../assets/goalIcons.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const SecondScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.teamImage}
          source={require('../assets/Team-goals-amico.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>Welcome to Goal Hub!</Text>
        <Text style={styles.smallText}>
          Connect securely with potential foster parents through our app.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const ThirdScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.teamImage}
          source={require('../assets/goalhubImage.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>Hey! Welcome</Text>
        <Text style={styles.smallText}>
          Where every Goal Hub journey begins.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamImage: {
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: 'normal',
    textAlign: 'center',
  },
  imageCover: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  image: {
    width: 150,
    height: 150,
  },
});
