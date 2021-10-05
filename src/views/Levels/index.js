
import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';


const Levels = () => {
  const navigation = useNavigation();      
  return(
<View style={styles.container}>
    <Image  style={ styles.general }
                source={require('../../../assets/tritonicwords.png')}
    />
  
  
  <TouchableOpacity style={styles.basic}   onPress={() => {navigation.navigate('SUBLEVELS');}}>
      <Image style={styles.image}  source={require('../../../assets/commontriads.png')} />

   </TouchableOpacity>
  

    <Image  style={ styles.advanced }
                source={require('../../../assets/advancetriads.png')}
    />



    <Text style={styles.title}>Choose a game</Text> 

</View>

  ); 
}
  
  export default Levels;