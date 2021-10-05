import * as SQLite from 'expo-sqlite';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cover from './src/views/Cover';
import Levels from './src/views/Levels';
import Sublevels from './src/views/Sublevels';
import Demo from './src/views/Demo';
import CommonTriads from './src/views/CommonTriads';



// Connection DB
import db from './src/database/database-initialization';




const Stack = createNativeStackNavigator();

function AppContainer() {

  useEffect(()  => {
   const init = async () => {
    await db.initialize();
    await db.Dbmigration();
   }
   init()
  }, [])

  
    

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="COVER" component={Cover} />
        <Stack.Screen name="LEVELS" component={Levels} />
        <Stack.Screen name="SUBLEVELS" component={Sublevels} />
        <Stack.Screen name="DEMO" component={Demo} />
        <Stack.Screen name="COMMONTRIADS" component={CommonTriads} />
        
        

        
        
        
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;