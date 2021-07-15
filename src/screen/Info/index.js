import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Info({ navigation }) {
  //Navega para página Home
  function handleNavigationToHome() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Info</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleNavigationToHome}
      >
        <Text style={styles.textButton}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  )
}