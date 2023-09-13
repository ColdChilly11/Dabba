import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Index from './index';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Home />
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
