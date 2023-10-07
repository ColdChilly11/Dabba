import React from 'react'
import Menu from '../menu/Menu';
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import styles from './Profile.style'
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profilepage = () => {

    const image = require('../../assets/images/HomeBackground.png');

    return (
        <SafeAreaView>
        <View style={styles.homepageview}>
            <ImageBackground
              round source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>

            <View>
                <Text style={{color: 'white'}}>Profile</Text>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default Profilepage