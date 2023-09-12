import React from 'react'
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import styles from './Login.style'
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loginpage = ({ navigation }) => {

  const handleSignInPress = () => {
    // Navigate to the Signinpage
    navigation.navigate('Signinpage');
  };

  const handleSignUpPress = () => {
    // Navigate to the Signinpage
    navigation.navigate('Signuppage');
  };
  // const signin = () => {

  // }
  const image = require('../../../assets/images/LoginBackground.png');
  const gradientColors = [
    'rgba(18, 129, 209, 0.90)',
    'rgba(255, 255, 255, 1.00)',
  ];

  const gradientLocations = [0.144, 0.91536];
  return (
    <SafeAreaView>
        <ImageBackground
          round source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        <View
          style={styles.loginView}>
            <LinearGradient
              colors={gradientColors}
              start={{ x: 0, y: 0 }}
              end={{ x: Math.cos(182 * (Math.PI / 180)), y: Math.sin(182 * (Math.PI / 180)) }}
              locations={gradientLocations}
              style={styles.buttonContainer}
            >
              {/* Your content here */}
            </LinearGradient>
            <View style={styles.buttonsViewcontainer}>
            <Pressable style={styles.signinbutton} onPress={handleSignInPress}>
              <Text style={styles.signintext}>Sign In</Text>
            </Pressable>
            <View style={styles.Viewtextor}>
              <Text style={styles.textor}>or</Text>
            </View>
            <Pressable style={styles.signupbutton} onPress={handleSignUpPress}>
              <Text style={styles.signuptext}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Loginpage