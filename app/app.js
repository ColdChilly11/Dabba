import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Index from './index';
import PositionProvider from '../components/home/home/Stockprofile/PositionContext';
import { VisibilityProvider } from '../components/home/home/Stockprofile/VisibilityContext';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VisibilityProvider>
      <NavigationContainer>
          <Index />
      </NavigationContainer>
      </VisibilityProvider>
    </SafeAreaView>
  );
};

export default App;
