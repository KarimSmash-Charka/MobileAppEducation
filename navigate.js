//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EighteenthLesson from "./Courses/EighteenthLesson";
import EighthLesson from "./Courses/EighthLesson";
import EleventhLesson from "./Courses/EleventhLesson";
import FifteenthLesson from "./Courses/FifteenthLesson";
import FifthLesson from "./Courses/FifthLesson";
import FirstLesson from "./Courses/FirstLesson";
import FourteenthLesson from "./Courses/FourteenthLesson";
import FourthLesson from "./Courses/FourthLesson";
import Main from "./Courses/Main";
import NinthLesson from "./Courses/NinthLesson";
import SecondLesson from "./Courses/SecondLesson";
import SeventeenthLesson from "./Courses/SeventeenthLesson";
import SeventhLesson from "./Courses/SeventhLesson";
import SixteenthLesson from "./Courses/SixteenthLesson";
import SixthLesson from "./Courses/SixthLesson";
import TenthLesson from "./Courses/TenthLesson";
import ThirdLesson from "./Courses/ThirdLesson";
import ThirteenthLesson from "./Courses/ThirteenthLesson";
import TwelfthLesson from "./Courses/TwelfthLesson";
import Home from "./screen/Home";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    //<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Список всех курсов' }}
        />
        <Stack.Screen name="Main" component={Main} options={{ title: 'Главное меню', headerStyle: { backgroundColor: 'lightpink', height: 110 }, headerTitleStyle: { fontWeight: 'light' } }} />
        <Stack.Screen name="FirstLesson" component={FirstLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="SecondLesson" component={SecondLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="ThirdLesson" component={ThirdLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="FourthLesson" component={FourthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="FifthLesson" component={FifthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="SixthLesson" component={SixthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="SeventhLesson" component={SeventhLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="EighthLesson" component={EighthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="NinthLesson" component={NinthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="TenthLesson" component={TenthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="EleventhLesson" component={EleventhLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="TwelfthLesson" component={TwelfthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="ThirteenthLesson" component={ThirteenthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="FourteenthLesson" component={FourteenthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="FifteenthLesson" component={FifteenthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="SixteenthLesson" component={SixteenthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="SeventeenthLesson" component={SeventeenthLesson} options={{ title: 'Курс' }} />
        <Stack.Screen name="EighteenthLesson" component={EighteenthLesson} options={{ title: 'Курс' }} />
      </Stack.Navigator>
    //</NavigationContainer>
  );
}
