import React from "react";
import {Text, View, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';

const App = () => {
  return (

    <View style={style.container}>
      <Text style = {style.title}>Hello World!</Text>
      <Image 
        source = {{uri: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80'}}
        style = {style.img}
      />
      <TouchableOpacity
      onPress = {() => Alert.alert('holaaaa')}
      style={style.button}
      >
        <Text
        style={style.button_text}
        >Presioname</Text>
      </TouchableOpacity>
    </View>  

  )
};

const style = StyleSheet.create({
  container : {
  flex: 1, 
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#292929'
  },

  title : {
    fontSize : 30,
    color: '#ffff'
  },

  img : {
    marginTop: 20,
    height : 200, 
    width: 200,
    borderRadius : 100
  },

  button : {
    backgroundColor : '#fff',
    borderRadius : 10,
    marginTop : 20
  },

  button_text : {
    padding : 10
  }
})

export default App;