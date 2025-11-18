import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import {gStyle} from '../styles/style';
export default function SixteenthLesson({navigation}) {
    const loadScene15=()=>{
        navigation.goBack();
    }
  const[list,setList]=useState({
    name:'ООП',
    info:'Обьектно орьентированное программирование',
  });
  return(
    <View style={gStyle.container}>
        <Text style={gStyle.sigmoid}>{list.name}</Text>
        <Button title='Go back to menu' onPress={loadScene15}/>
    </View>
  );
}
