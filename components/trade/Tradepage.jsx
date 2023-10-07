import React from 'react'
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import styles from './Tradepage.style'
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tradepage = () => {

    const image = require('../../assets/images/HomeBackground.png');

    return (
        <SafeAreaView>
        <View style={styles.tradepageview}>
            <ImageBackground
              round source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>
            <View>
                <Text style={{color: 'white'}}>Trade</Text>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default Tradepage