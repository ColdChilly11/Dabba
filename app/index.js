import React from 'react';
import { Loginpage, Signinpage, Signuppage } from '../components';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loginpage"  options={{headerShown: false}} component={Loginpage} />
      <Stack.Screen name="Signinpage" options={{headerShown: false}} component={Signinpage} />
      <Stack.Screen name="Signuppage" options={{headerShown: false}} component={Signuppage} />
    </Stack.Navigator>
  );
};

export default Home;


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