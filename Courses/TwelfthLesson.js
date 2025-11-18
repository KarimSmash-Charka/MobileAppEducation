import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import {gStyle} from '../styles/style';
export default function TwelfthLesson({navigation}) {
    const loadScene11=()=>{
        navigation.goBack();
    }
  const[list,setList]=useState({
    name:'binary search',
    info:'бинарный поиск',
  });
  return(
    <View style={gStyle.container}>
        <Text style={gStyle.sigmoid}>{list.name}</Text>
        <Button title='Go back to menu' onPress={loadScene11}/>
    </View>
  );
}
