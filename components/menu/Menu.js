import { useNavigation } from '@react-navigation/native';
import React from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from "react-native";
import styles from './Menu.style';
import { ImageBackground } from 'react-native';

const Menu = () => {

    const TradePress = () => {
        // Navigate to the Signinpage
        navigation.navigate('Tradepage');
      };

      const HomePress = () => {
        // Navigate to the Signinpage
        navigation.navigate('Homepage');
      };

      const PositionPress = () => {
        // Navigate to the Signinpage
        navigation.navigate('Positionpage');
      };

      const ProfilePress = () => {
        // Navigate to the Signinpage
        navigation.navigate('Profilepage');
      };

    const navigation = useNavigation();

    const homeicon = require('../../assets/images/menubar/HomeIcon.png');
    const tradeicon = require('../../assets/images/menubar/TradeIcon.png');
    const positionicon = require('../../assets/images/menubar/PositionIcon.png');
    const profileicon = require('../../assets/images/menubar/ProfileIcon.png');

    return (
        <View style={styles.menuview}>


            <TouchableOpacity style={styles.buttonstyle2} onPress={HomePress}>
                <ImageBackground
                  round source={homeicon} resizeMode="cover" style={styles.image}>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonstyle1} onPress={TradePress}>
                <ImageBackground
                  round source={tradeicon} resizeMode="cover" style={styles.image}>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonstyle2} onPress={PositionPress}>
                <ImageBackground
                  round source={positionicon} resizeMode="cover" style={styles.image}>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonstyle1} onPress={TradePress}>
                <ImageBackground
                  round source={profileicon} resizeMode="cover" style={styles.image}>
                </ImageBackground>
            </TouchableOpacity>
            
        </View>
    )
}

export default Menu