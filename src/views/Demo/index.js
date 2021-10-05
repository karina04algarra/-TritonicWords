import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';



const Demo = () => {
    const navigation = useNavigation(); 
    return ( 

    <View style={  styles.container}>

        <TouchableOpacity style={ styles.closecircleo }   onPress={() => {navigation.navigate('SUBLEVELS');}} > 
            <AntDesign name="closecircleo" size={24} color={"#ffffff"} />
        </TouchableOpacity>

        

        <View style={styles.titlecircle}>
            <Text style={styles.title}>The most common triads</Text>
        </View>

        <View> 
            <Text style={styles.subtitle}>How to Solve</Text>
        </View>

        
        <View> 
            <Text style={styles.phrase}>¿Cúal es su -------?</Text>
        </View>

        
            
                <View 
                    style={styles.po}> 
                    <TouchableOpacity style={[ styles.btn, { backgroundColor: "#ABE89C" }] }> 
                    <Text style={styles.buttonLabel}>número </Text> 
                    </TouchableOpacity>
                </View>

                <View style={styles.po}>
                <TouchableOpacity style={ [styles.btn, {backgroundColor: "#71B6FB" }] }> 
                    <Text  style={styles.buttonLabel}>numero </Text> 
                </TouchableOpacity> 
                </View>

                <AntDesign style={styles.check} name="check"  />

                <View style={styles.po}>
                <TouchableOpacity style={[ styles.btn, { backgroundColor: "#C24957", bottom: 24  }] }> 
                    <Text  style={styles.buttonLabel}>numeró </Text> 
                </TouchableOpacity> 
                </View>


            <View> 
                <Text style={styles.footer}>Select the correct word</Text>
            </View>

    </View>
    )
    
};

export default Demo;