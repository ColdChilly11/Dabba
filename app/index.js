import React from 'react';
import { Homepage, Loginpage, Positionpage, Profilepage, Signinpage, Signuppage, Tradepage } from '../components';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loginpage"  options={{headerShown: false}} component={Loginpage} />
      <Stack.Screen name="Signinpage" options={{headerShown: false}} component={Signinpage} />
      <Stack.Screen name="Signuppage" options={{headerShown: false}} component={Signuppage} />
      <Stack.Screen name="Homepage" options={{headerShown: false}} component={Homepage} />
      <Stack.Screen name="Tradepage" options={{headerShown: false}} component={Tradepage} />
      <Stack.Screen name="Positionpage" options={{headerShown: false}} component={Positionpage} />
      <Stack.Screen name="Profilepage" options={{headerShown: false}} component={Profilepage} />
    </Stack.Navigator>
  );
};

export default Index;


// options={{
//   headerTitle: 'Login Page', 
//   headerStyle: {
//     height: 50, 
//     backgroundColor: 'white', 
//   },
//   headerTitleStyle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// }}