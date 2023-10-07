import React from 'react'
import Menu from '../../menu/Menu';
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';

import styles from './Home.style'
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Stockprofile from './Stockprofile/Stockprofile';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

const Homepage = () => {

    const navigation = useNavigation();

    const handleStockPress = () => {
        // Navigate to the Signinpage
        navigation.navigate('Stockprofile');
      };

    const image = require('../../../assets/images/HomeBackground.png');

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView>

            <ImageBackground
              round source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>

        <View style={styles.homepageview}>

            <View style={styles.usernameview}>
                <Text style={styles.usernametext}>Welcome, Dear User !</Text>
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

            <View style={styles.filteredstockview}>

                <View style={styles.filtered}>
                    <Text style={styles.filteredtext}>NIFTY 50</Text>
                    <View style={styles.marketstocklefttop}>
                            <Text style={styles.marketstocktexttop}>19,749.25</Text>
                            <Text style={styles.marketstockpercenttop}>+37.80(0.19%)</Text>
                    </View>
                </View>

                <View style={styles.filtered}>
                    <Text style={styles.filteredtext}>SENSEX</Text>
                    <View style={styles.marketstocklefttop}>
                            <Text style={styles.marketstocktexttop}>66,795.14</Text>
                            <Text style={styles.marketstockpercenttop2}>-205.21(0.31%)</Text>
                    </View>
                </View>

            </View>

            {/* <View style={styles.fundsview}>
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
            </View> */}
        </View>

        <View style={styles.marketwatchview}>
            <View style={styles.markettextview}>
                <Text style={styles.markettext}>Martketwatch</Text>
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
            <View style={styles.martketHscroll2}>    
                <ScrollView vertical={true} showsVerticalScrollIndicator={false} pagingEnabled={false}>
                    <TouchableOpacity onPress={handleStockPress}>
                    <View style={styles.marketoption2}>
                        <View style={styles.marketstockleft}>
                            <Text style={styles.marketstocktext}>SGX SGXNIFTY Jul 27</Text>
                            <Text style={styles.marketstockpercent}>42.0 (0.21%)</Text>
                        </View>
                        <View style={styles.marketstockright}>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>L: 19750.0</Text>
                            </View>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>H: 19750.0</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleStockPress}>
                    <View style={styles.marketoption2}>
                    <View style={styles.marketstockleft}>
                            <Text style={styles.marketstocktext}>NSE BANKNIFTY Jul 27</Text>
                            <Text style={styles.marketstockpercent}>254.0 (0.56%)</Text>
                        </View>
                        <View style={styles.marketstockright}>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>H: 19750.0</Text>
                            </View>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>L: 19750.0</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleStockPress}>
                    <View style={styles.marketoption2}>
                    <View style={styles.marketstockleft}>
                            <Text style={styles.marketstocktext}>MCX GOLD Aug 4</Text>
                            <Text style={styles.marketstockpercent}>19.0 (0.03%)</Text>
                        </View>
                        <View style={styles.marketstockright}>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>L: 19750.0</Text>
                            </View>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>H: 19750.0</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleStockPress}>
                    <View style={styles.marketoption2}>
                        <View style={styles.marketstockleft}>
                            <Text style={styles.marketstocktext}>SGX SGXNIFTY Jul 27</Text>
                            <Text style={styles.marketstockpercent}>42.0 (0.21%)</Text>
                        </View>
                        <View style={styles.marketstockright}>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>L: 19750.0</Text>
                            </View>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>H: 19750.0</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleStockPress}>
                    <View style={styles.marketoption2}>
                    <View style={styles.marketstockleft}>
                            <Text style={styles.marketstocktext}>NSE BANKNIFTY Jul 27</Text>
                            <Text style={styles.marketstockpercent}>254.0 (0.56%)</Text>
                        </View>
                        <View style={styles.marketstockright}>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>H: 19750.0</Text>
                            </View>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>L: 19750.0</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleStockPress}>
                    <View style={styles.marketoption2}>
                    <View style={styles.marketstockleft}>
                            <Text style={styles.marketstocktext}>MCX GOLD Aug 4</Text>
                            <Text style={styles.marketstockpercent}>19.0 (0.03%)</Text>
                        </View>
                        <View style={styles.marketstockright}>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>L: 19750.0</Text>
                            </View>
                            <View style={styles.marketstocklowhigh}>
                                <Text style={styles.marketstocklowhightext}>19845.0</Text>
                                <Text style={styles.marketstocklowhightext2}>H: 19750.0</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* <View style={styles.marketstocksview}>
                <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={{height: 100}}>
                    <View style={styles.marketstock1}>
                        <View style={styles.marketstockleft}>

                        </View>
                        <View style={styles.marketstockright}>
                            <View style={styles.marketstockright1}>

                            </View>
                            <View style={styles.marketstockright1}>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View> */}
        </View>

        {/* <View>
            <Menu />
        </View> */}
        </SafeAreaView>
    )
}

export default Homepage