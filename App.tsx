import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import { ContextProvider } from './contexts/ContextProvider';

const App = () => {
  const Stack = createNativeStackNavigator();

  const headerTintColor = '#fff';
  const headerStyle = {
    backgroundColor: '#000',
  }

  return (
    <ContextProvider>
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
    </ContextProvider>
  );
}

export default App;