import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, Button, } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import levelService from '../../services/levelService';



const Sublevels = () => {
    const navigation = useNavigation(); 
    const [levels, setlevels] = useState([])
    

useEffect(()=> {
    getListLevel();

},[])
async function getListLevel() {
    const listLevel = await levelService.listLevel();
    // console.log('componente : ',listLevel )
    if (listLevel && listLevel.length > 0) setlevels(listLevel)
}

    const handleGoToSublevel = (id) => {
        navigation.navigate('COMMONTRIADS', { id });
    }
    return(

        
    <View style={  styles.container}>
        
    <Text style={styles.subtitle}>The most common triads</Text>

    

    <View>
    
    <TouchableOpacity style={ styles.home }     onPress={() => {navigation.navigate('LEVELS');}} > 
        <AntDesign   name="home" size={24} color={"#ffffff"}  />
    </TouchableOpacity>

    </View>


    <View>
        <TouchableOpacity style={ styles.question }   onPress={() => {navigation.navigate('DEMO');}}>
        <AntDesign  name="questioncircleo" size={24} color={"#ffffff"}  /> 
        </TouchableOpacity>
        
    
    </View>

    <Image  style={ styles.general }
                source={require('../../../assets/commontriads.png')}
    />

<View style={styles.containerpo}>
    

        
        <View style={styles.po}>
            
            
        {levels.splice(0,3).map(function(level, index){
            return (
            <TouchableOpacity key={index} style={[ styles.btn, { backgroundColor: "#A97CFB" }] }
            onPress={() => handleGoToSublevel(level.id)}
        >
                <Text style={styles.buttonLabel}>{level.levelName}</Text>
                
        </TouchableOpacity>
            )
        })}
        
        </View>

        <View style={styles.po}>
        {levels.splice(0,6).map(function(level, index){
            return (
            <TouchableOpacity key={index} style={[ styles.btn, { backgroundColor: "#A97CFB" }] }
            onPress={() => handleGoToSublevel(level.id)}
        >
            <Text style={styles.buttonLabel}>{level.levelName}</Text>
                
        </TouchableOpacity>
        )
        })}
        </View>

    
    
    </View>
    </View>
    )

};

export default Sublevels;