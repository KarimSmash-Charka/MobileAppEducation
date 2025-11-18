import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import {gStyle} from '../styles/style';
import { ScrollView } from 'react-native-gesture-handler';
export default function Main({navigation}) {
    console.log("Navigation object:",navigation);
    const loadScene=()=>{
        navigation.navigate("FirstLesson");
    }
    const loadScene1=()=>{
      navigation.navigate("SecondLesson");
    }
    const loadScene2=()=>{
      navigation.navigate("ThirdLesson");
    }
    const loadScene3=()=>{
      navigation.navigate("FourthLesson");
    }
    const loadScene4=()=>{
      navigation.navigate("FifthLesson");
    }
    const loadScene5=()=>{
      navigation.navigate("SixthLesson");
    }
    const loadScene6=()=>{
      navigation.navigate("SeventhLesson");
    }
    const loadScene7=()=>{
      navigation.navigate("EighthLesson");
    }
    const loadScene8=()=>{
      navigation.navigate("NinthLesson");
    }
    const loadScene9=()=>{
      navigation.navigate("TenthLesson");
    }
    const lessons = [
      { title: "Open First lesson", scene: "FirstLesson",image:''},
      { title: "Open Second lesson", scene: "SecondLesson",image:''},
      { title: "Open Third lesson", scene: "ThirdLesson",image:'' },
      { title: "Open Fourth lesson", scene: "FourthLesson",image:'' },
      { title: "Open Fifth lesson", scene: "FifthLesson",image:''},
      { title: "Open Sixth lesson", scene: "SixthLesson",image:''},
      { title: "Open Seventh lesson", scene: "SeventhLesson",image:''},
      { title: "Open Eighth lesson", scene: "EighthLesson",image:''},
      { title: "Open Ninth lesson", scene: "NinthLesson",image:''},
      { title: "Open Tenth lesson", scene: "TenthLesson",image:''},
      { title: "Open Eleventh lesson",scene:'EleventhLesson',image:''},
      { title: "Open Twelfth lesson",scene:'TwelfthLesson',image:''},
      { title: "Open Thirtheenth lesson",scene:"ThirteenthLesson",image:''},
      { title: "Open Fouteenth lesson", scene:"FourteenthLesson",image:''},
      { title: "Open Fifteenth lesson", scene:"FifteenthLesson",image:''},
      { title: "Open Sixteenth lesson", scene:"SixteenthLesson",image:''},
      { title: "Open Seventeenth lesson", scene:"SeventeenthLesson",image:''},
      { title: "Open Eighteenth lesson", scene:"EighteenthLesson",image:''}
    ];
  return(
    <View style={gStyle.container}>
      <ScrollView
       style={gStyle.scrollView}
       contentContainerStyle={gStyle.scrollContainer}
       showsVerticalScrollIndicator={false}
       keyboardShouldPersistTaps='handled'
      >
        <View style={gStyle.Intro}>
          <Text style={{fontSize:30,fontWeight:'Bold'}}>Введение в с++</Text>
        </View>
        {lessons.map((lesson,index)=>(
          <TouchableOpacity
          key={index}
          style={gStyle.forButtons}
          onPress={()=>navigation.navigate(lesson.scene)}
          >
          <Text style={gStyle.forButtons}>{lesson.title}</Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
    </View>
  );
}
