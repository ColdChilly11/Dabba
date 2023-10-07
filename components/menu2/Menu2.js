import { useNavigation } from '@react-navigation/native';
import React from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, View } from "react-native";
import styles from './Menu2.style';
import { ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../home/home/Home';
import Tradepage from '../trade/Tradepage';
import Positionpage from '../position/Position';
import Profilepage from '../profile/Profile';
import { Image } from 'react-native';
import Stockprofile from '../home/home/Stockprofile/Stockprofile';

const Menu2 = () => {

    const screenWidth = Dimensions.get('window').width;

    const Tab = createBottomTabNavigator();

    const navigation = useNavigation();

    const homeicon = require('../../assets/images/menubar/HomeIcon.png');
    const tradeicon = require('../../assets/images/menubar/TradeIcon.png');
    const positionicon = require('../../assets/images/menubar/PositionIcon.png');
    const profileicon = require('../../assets/images/menubar/ProfileIcon.png');
    const backgroundbar = require('../../assets/images/menubar/backgroundbar.png');

    return (
        <View style={styles.menuview}>
            <Tab.Navigator screenOptions={{tabBarBackground: () => (<Image source={backgroundbar} style={{width: screenWidth+10, height: 200, zIndex: 1, backgroundColor: 'red',left: -4.5, top: -10, borderTopLeftRadius: 20, borderTopRightRadius: 20}} />)}} tabBarOptions={{
                // activeBackgroundColor: '#191818',
                // inactiveBackgroundColor: '#191818',
                activeTintColor: 'white',
                


            }}>
                <Tab.Screen name="Homepage" component={Homepage} options={{ headerShown: false, tabBarIcon: () => (<Image source={homeicon} style={styles.image}/>), tabBarLabel: ''}}/>
                <Tab.Screen name="Tradepage" component={Tradepage} options={{ headerShown: false, tabBarIcon: () => (<Image source={tradeicon} style={styles.image}/>), tabBarLabel: ''}}/>
                <Tab.Screen name="Positionpage" component={Positionpage} options={{ headerShown: false, tabBarIcon: () => (<Image source={positionicon} style={styles.image}/>), tabBarLabel: ''}}/>
                <Tab.Screen name="Profilepage" component={Profilepage} options={{ headerShown: false, tabBarIcon: () => (<Image source={profileicon} style={styles.image}/>), tabBarLabel: ''}}/>
            </Tab.Navigator>
        </View>
    )
}

export default Menu2