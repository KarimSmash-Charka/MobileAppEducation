import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import {gStyle} from '../styles/style';
export default function FourteenthLesson({navigation}) {
    const loadScene13=()=>{
        navigation.goBack();
    }
  const[list,setList]=useState({
    name:'pair',
    info:'использование пар в массивах',
  });
  return(
    <View style={gStyle.container}>
        <Text style={gStyle.sigmoid}>{list.name}</Text>
        <Button title='Go back to menu' onPress={loadScene13}/>
    </View>
  );
}
