import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Header from './components/Header';
import NoResult from './components/NoResult';
import Cocktail from './models/Cocktail.model';
import { COCKTAIL_API_URL_ORDINARY_DRINK, COCKTAIL_API_URL_RANDOM, COCKTAIL_API_URL_SEARCH } from './utils';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  const headerTintColor = '#fff';
  const headerStyle = {
    backgroundColor: '#000',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerStyle,
            headerTintColor,
          }}
        />

        <Stack.Screen name="Detail" component={DetailScreen}
          options={({ route }) => ({
            title: route?.params?.name, 
            headerStyle,
            headerTintColor,
          })} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;