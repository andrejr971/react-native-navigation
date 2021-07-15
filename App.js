import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './src/screen/Home';
import { Info } from './src/screen/Info';

/**
 * Estou iniciando a constante stack
 */
const Stack = createStackNavigator();

/**
 * Para usar a Navegação por Stack, preciso deixar dentro
 * de um container (tem que estar encapsulado), no caso o 'NavigationContainer',
 * 
 * A Stack.Screen é a navegação entre as telas, aonde dou um nome pra rota e indico
 * qual componete (tela) será chamado
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*No atribruto options estou desativando o Header, que a navegação stack*/}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ 
            headerShown: false
          }} 
        />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}