import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from '../components/home/login/Login';
import { Menu2, Positionpage, Profilepage, Signinpage, Signuppage, Tradepage } from '../components';
import Stockprofile from '../components/home/home/Stockprofile/Stockprofile';
import PositionProvider from '../components/home/home/Stockprofile/PositionContext';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Loginpage" component={Loginpage} options={{ headerShown: false }} />
    <AuthStack.Screen name="Signinpage" component={Signinpage} options={{ headerShown: false }} />
    <AuthStack.Screen name="Signuppage" component={Signuppage} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="MainStackScreen" component={Menu2} options={{ headerShown: false }} />
    <MainStack.Screen name="Stockprofile" component={Stockprofile} options={{ headerShown: false }} />
    {/* Other screens in the stack */}
  </MainStack.Navigator>
);

const Index = () => {
  // You can add logic here to determine whether to show AuthStack or MainStack
  // For example, check if the user is authenticated or not.
  const userAuthenticated = true; // Replace with your authentication logic
  
  return (
    <>
    {userAuthenticated ? <MainStackScreen /> : <AuthStackScreen />}
    </>
  );
};

export default Index;
