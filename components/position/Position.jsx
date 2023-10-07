import React from 'react'
import Menu from '../menu/Menu';
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

import styles from './Position.style'
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const Positionpage = () => {

    const image = require('../../assets/images/HomeBackground.png');

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView>

            <ImageBackground
              round source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>

        <View style={{display: 'flex'}}>
                <View style={styles.positiontextview}>
                    <Text style={styles.fundstextpos}>Position</Text>
                </View>
            <View style={styles.filteredstockview}>
                <View style={styles.filtered}>
                    <Text style={styles.filteredtext}>Nifty 50</Text>
                </View>

                <View style={styles.filtered}>
                    <Text style={styles.filteredtext}>SENSEX</Text>
                </View>

            </View>

            <View style={styles.fundsview}>
                <View style={styles.fundstextview}>
                    <Text style={styles.fundstext}>Funds</Text>
                </View>
                <View style={styles.fundsboxes}>
                    <View style={styles.boxes}>
                        <Text style={styles.boxestext}>Credits</Text>
                        <Text style={styles.boxestext2}>5,00,000.00</Text>
                    </View>
                    <View style={styles.boxes}>
                        <Text style={styles.boxestext}>Balance</Text>
                        <Text style={styles.boxestext2}>30,000.00</Text>
                    </View>
                </View>
            </View>

            <View style={styles.searchbarview}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchbar}
                    iconColor='white'
                    placeholderTextColor={'white'}
                    inputStyle={{color: 'white'}}
                />
            </View>

            <View style={styles.martketHscroll}>    
                <ScrollView horizontal={true} vertical={false} showsHorizontalScrollIndicator={false}>
                    <View style={styles.marketoption1}>
                        <Text style={styles.marketoptiontext}>ALL</Text>
                    </View>
                    <View style={styles.marketoption1}>
                        <Text style={styles.marketoptiontext}>NSE</Text>
                    </View>
                    <View style={styles.marketoption1}>
                        <Text style={styles.marketoptiontext}>Callput</Text>
                    </View>
                    <View style={styles.marketoption1}>
                        <Text style={styles.marketoptiontext}>MCX</Text>
                    </View>
                </ScrollView>
            </View>

            </View>

        </SafeAreaView>
    )
}

export default Positionpage