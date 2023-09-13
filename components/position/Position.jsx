import React from 'react'
import Menu from '../menu/Menu';
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import styles from './Position.style'
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Positionpage = () => {

    // const image = require('../../../assets/images/HomeBackground.png');

    return (
        <SafeAreaView>
        <View style={styles.positionpageview}>
            {/* <ImageBackground
              round source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground> */}

            <View>
                <Text style={{color: 'white'}}>Home</Text>
            </View>
        </View>
        <View>
            <Menu />
        </View>
        </SafeAreaView>
    )
}

export default Positionpage