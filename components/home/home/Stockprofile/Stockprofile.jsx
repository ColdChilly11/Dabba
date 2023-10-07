import React, { useState } from 'react'
import Menu from '../../../menu/Menu';
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input'


import styles from './Stockprofile.style'
import { ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { useVisibility } from './VisibilityContext';
// import { usePosition } from './PositionContext';

const Stockprofile = () => {

    const navigation = useNavigation();

    // const { dispatch } = usePosition();

    const [value, setValue] = useState(0);

    // const { isViewVisible, toggleViewVisibility } = useVisibility();

    const handleValueChange = (newValue) => {
        setValue(newValue); // Update the state when the value changes
      };

    const handleStockPress = () => {
        // Navigate to the Signinpage
        navigation.navigate('Stockprofile');
      };

    const image = require('../../../../assets/images/HomeBackground.png');
    const gobackicon = require('../../../../assets/icons/goback.png');

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    // const [isViewVisible, setViewVisible] = useState(false);

    const handleBuyClick = () => {
        setViewVisible(!isViewVisible);
      };

    const handleGoBack = () => {
        navigation.goBack(); // Go back when the icon is pressed
      };

    return (
        <SafeAreaView>

            <ImageBackground
              round source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>

        <View style={{display: 'flex'}}>
            <TouchableOpacity onPress={handleGoBack}>
                <View style={styles.goback}>
                    <Image
                        source={require('../../../../assets/icons/goback.png')} // Replace with the actual image path
                        style={styles.gobackimage}
                    />
                </View>
            </TouchableOpacity>

        <View style={styles.majorview}>

            <View style={styles.stockchart}>
                    <Image
                        source={require('../../../../assets/images/stockchart.png')} // Replace with the actual image path
                        style={styles.stockchartimage}
                    />
            </View>

            <View style={styles.stockview}>
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

                    <View style={styles.marketlimit}>
                        <View style={styles.fundsboxes}>
                            <View style={styles.boxes}>
                                <Text style={styles.boxestext}>Market</Text>
                            </View>
                            <View style={styles.boxes}>
                                <Text style={styles.boxestext}>Limit</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.marketlimit}>
                        <View style={styles.fundsboxes2}>
                            <View style={styles.boxestext2}>
                                <Text style={styles.boxestext}>Price</Text>
                            </View>
                            <View style={styles.boxes2}>
                                <Text style={styles.boxestext}>19800</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.marketlimit}>
                        <View style={styles.fundsboxes2}>
                            <View style={styles.boxestext2}>
                                <Text style={styles.boxestext}>Quantity</Text>
                            </View>
                            <View style={styles.boxes2}>
                                <NumericInput
                                    value={value}
                                    onChange={handleValueChange} 
                                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                    totalWidth={150} 
                                    totalHeight={50} 
                                    iconSize={25}
                                    step={1}
                                    valueType='integer' 
                                    textColor='white' 
                                    iconStyle={{ color: 'white' }} 
                                    rightButtonBackgroundColor='transparent' 
                                    leftButtonBackgroundColor='transparent'  
                                    borderColor='transparent'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.marketlimit}>
                        <View style={styles.fundsboxes}>
                            <View style={styles.buysellboxe1}>
                                <TouchableOpacity><Text style={styles.boxestext}>Sell</Text></TouchableOpacity>
                            </View>
                            <View style={styles.buysellboxe2}>
                                <TouchableOpacity><Text style={styles.boxestext}>Buy</Text></TouchableOpacity>
                                {/* <Button title='Buy' onPress={handleBuyClick} style={styles.boxesbuytext}>Buy</Button> */}
                            </View>
                        </View>
                    </View>

                    <View style={styles.marketlimit}>
                        <View style={styles.fundsboxes}>
                            <View style={styles.chartboxes}>
                                <TouchableOpacity><Text style={styles.boxestext}>Chart</Text></TouchableOpacity>
                            </View>
                            <View style={styles.chartboxes}>
                            <TouchableOpacity><Text style={styles.boxestext}>Info</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    

            </View>
            
        </View>
    </View>

        </SafeAreaView>
    )
}

export default Stockprofile