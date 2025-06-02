import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

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

    const timeout = setTimeout(() => {
      navigation.replace('Second');
    }, 1200);

    return () => clearTimeout(timeout);
  }, [opacity, rotation, navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AnimatedImage
          style={[styles.image, animatedStyle]}
          source={require('../../assets/goalhubImage.png')}
        />
      </View>
      <View style={styles.imageCover}>
        <Image
          style={styles.icon}
          source={require('../../assets/goalIcons.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
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
});
