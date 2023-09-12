import React from 'react'
import { View, Text, Button, Alert, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { SelectList } from 'react-native-dropdown-select-list'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimatedTextInput from 'react-native-animated-placeholder-textinput';

import styles from './Signup.style'
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { Switch, TextInput } from 'react-native-gesture-handler';

const Signuppage = ({navigation}) => {

  const handleSignInPress = () => {
    // Navigate to the Signinpage
    navigation.navigate('Signinpage');
  };
  
  const image = require('../../../assets/images/BackGround(signup).png');

    const countries = [
        'Server 1',
        'Server 2',
        'Server 3',
        'Server 4',
        'Server 5',
        'Server 6',
        'Server 7',
        'Server 8',
        'Server 9',
        'Server 10',
        'Server 11',
        'Server 12',
      ];

  const [selected, setSelected] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [city, onChangeCity] = React.useState("");
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const [secure, setSecure] = React.useState(props.secure);



  const gradientLocations = [0.144, 0.91536];
  return (
    
    <SafeAreaView>
        
        <ImageBackground
          round source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        
        <View
          style={styles.loginView}>

          <View style={styles.buttonsViewcontainer}>

            <SelectDropdown 
                    style={styles.selectdrop}
                    data={countries}
                    // defaultValueByIndex={1}
                    // defaultValue={'England'}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    defaultButtonText={'Select Server'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    buttonStyle={[styles.dropdown2BtnStyle, { marginBottom: 50 }]}
                    buttonTextStyle={styles.dropdown2BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                      return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={12} padding={15} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown2DropdownStyle}
                    rowStyle={styles.dropdown2RowStyle}
                    rowTextStyle={styles.dropdown2RowTxtStyle}
            />

              <TextInput
                style={[styles.username, { marginBottom: 50 }]}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Mobile Number"
                placeholderTextColor={'white'}
                keyboardType="numeric"
              />
              
              <TextInput
                style={[styles.username, { marginBottom: 50 }]}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
                placeholderTextColor={'white'}
                // keyboardType="text"
              />

            {/* <View style={styles.signinbutton} onPress={() => Alert.alert('Less Gooo!!!')}>
              <AnimatedUsernameInput />
            </View> */}

              <TextInput
                style={styles.username}
                onChangeText={onChangeCity}
                value={city}
                placeholder="City"
                placeholderTextColor={'white'}
                // keyboardType="text"
              />
          
          </View>

            <Pressable style={styles.signinbutton} onPress={() => Alert.alert('Less Gooo!!!')}>
              <Text style={styles.signintext}>Sign Up</Text>
            </Pressable>

            <View style={styles.donthaveview}>
              <Text style={styles.donthavetext} onPress={handleSignInPress}>Already a member? Sign In</Text>
            </View>

        
        </View>
    </SafeAreaView>
  )
}

export default Signuppage