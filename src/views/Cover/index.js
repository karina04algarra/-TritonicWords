import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style';


class Cover extends Component {
    constructor(props) {
      super(props);
      
  
      setTimeout(() => {
        this.props.navigation.navigate('LEVELS');
        }, 3000);
    }
  
    render() {
      return (
    <View style={styles.container}>
     <Text style={styles.title}>Tritonic Words</Text> 
     <Text style={styles.subtitle}>Improve your Spanish</Text> 
     <Text style={styles.lastsubtitle}>Become a Spanish speaker pro</Text> 
   </View>
      );
    }
  }

  
  export default Cover;