import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { gStyle } from "../styles/style";
export default function Home({navigation}) {
    const[registered,Setregistered]=useState(false);
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");
    const[islogin,setIslogin]=useState("true");
    console.log("Process");
    const Courses=[
        {title:'Курс по C++', scene:'Main'},
        {title:'Курс по Java',scene:''},
        {title:'Курс по Python', scene:''},
        {title:'Курс по JavaScript', scene:''},
        {title:'Framework:React-native', scene:''},
        {title:'Framework',scene:''},
        {title:'Framework',scene:''},
        {title:'Framework',scene:''},
    ];

    const Submit=async()=>{
      const url=islogin
      ? "http://127.0.0.1:5000/login"
      : "http://127.0.0.1:5000/register"
      try{
        const response=await fetch(url,{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({username,password})
        });
      const data=await response.json();
      if(response.status===200){
        Setregistered(true)
      }
      else{
        setMessage(data.message || "Ошибка")
      }
      }
      catch(error){
        setMessage("Ошибка соединения с сервером");
      }
    };
    const toggleMode=()=>{
      setIslogin(!islogin);
      setMessage("");
    }
      return (
        <View style={gStyle.newTitle}>
          <Text style={gStyle.TypeShit}>Курсы</Text>
          <View style={gStyle.homeButtons}>
            {Courses.map((lesson,index)=>(
                <TouchableOpacity
                key={index}
                style={gStyle.forCharkas}
                onPress={()=>navigation.navigate(lesson.scene)}
                >
                <View style={gStyle.buttonContent}>
                <Text style={gStyle.charkism}>{lesson.title}</Text>  
                <Image
                  source={require('../styles/photos/SendingImage.png')}
                  style={gStyle.SendingImage}
                />
                </View>
                </TouchableOpacity>
            ))}
            </View>
        </View>
      );
    // else{
    //   return(
    //     <View style={gStyle.container}>
    //       <Text style={gStyle.title}>{islogin?"Вход":"Регистрация"}</Text>
    //       <TextInput
    //         placeholder="Имя пользователя"
    //         style={gStyle.charkism}
    //         value={username}
    //         onChangeText={setUsername}
    //       />
    //       <TextInput
    //         placeholder="Пароль"
    //         style={gStyle.charkism}
    //         secureTextEntry
    //         value={password}
    //         onChangeText={setPassword}
    //       />
    //       <Button title={islogin?"Войти":"Зарегестрироваться"} onPress={Submit}/>
    //       <TouchableOpacity onPress={toggleMode}>
    //         <Text>
    //         {islogin ? "У меня нет аккаунта(Зарегестрироваться)":"У меня уже есть аккаунт(Войти)"}
    //         </Text>
    //       </TouchableOpacity>
    //       <Text style={gStyle.info}>{message}</Text>
    //     </View>
    //   )
    // }
}
