import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

/**
 * 
 * Estou pegando através das props o navigation, com a desestruturação
 */
export function Home({ navigation }) {
  //Navega para a página home
  function handleNavigationToInfo() {
    navigation.navigate('Info')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Home</Text>

      {/*TouchableOpacity é um botão também*/}
      <TouchableOpacity 
        style={styles.button}
        onPress={handleNavigationToInfo}
      >
        <Text style={styles.textButton}>Ir para outra página</Text>
      </TouchableOpacity>
    </View>
  )
}