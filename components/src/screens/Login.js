import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';


export default function Login(props) {
  const [name, setName] = useState("Athar Rasool");
  const [email, setEmail] = useState("atharrasool210@gmail.com");
  return (
    <View style={styles.container}>
      <ImageBackground style={{ width: "100%", height: "100%", }} source={{ uri: 'https://miro.medium.com/max/1080/1*hU0QQDiOnsKpX4qlIyn_4w.jpeg' }}>
        <Text style={{ fontSize: 21, textAlign:'center',marginTop:160, color:'white'}}>{name}</Text>
        <Text style={{ fontSize: 21, textAlign:'center',marginTop:10, color:'white' }}>{"Blood Bank Sign Up "}</Text>
        <StatusBar style="auto" />
        <TextInput style={{ height: 40, width: 250, marginTop: 30, borderColor: 'black', borderWidth: 1, textAlign:'center', marginLeft:50,backgroundColor:'white',borderRadius:12 }} placeholder={"   Enter Username"} />
        <TextInput style={{ height: 40, width: 250, marginTop: 10, borderColor: 'black', borderWidth: 1, textAlign:'center', marginLeft:50,backgroundColor:'white',borderRadius:12  }} placeholder={"   Enter Password"} secureTextEntry={true} />
        <TouchableOpacity>
        <Text style={styles.btn} >
            Login
        </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.btn2} onPress={()=>props.navigation.navigate("Home") }   >
            Sign Up
        </Text></TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:
  {
    fontSize: 20,
    marginTop: 25,marginLeft:120,
    backgroundColor: 'blue',
    height: 30,
    width: 100,
    textAlign: 'center', color: 'white',
    borderRadius: 11,
  },
  btn2:
  {
    fontSize: 20,
    marginTop: 25,marginLeft:120,
    backgroundColor: 'red',
    height: 30,
    width: 100,
    textAlign: 'center', color: 'white',
    borderRadius: 11,
  },
});
