import React, { useEffect, useState } from "react";
import { StyleSheet, Text,View } from "react-native";
import Nav from "./src/nav";
import Generate from "./src/generate";
import ListItems from "./src/listitems";
const App = () => {

const [hello,setHello] = useState(true);
const [random,setRandom] = useState([20,100]);
useEffect(()=>{
  setTimeout(() =>{
    setHello(false);
  },2000)
},[])

onAddRandom = () => {
 const randomValue = Math.floor(Math.random() * 100 + 1);
 const newState = [...random,randomValue];
 setRandom(newState);
}

  return (
    <View style = {styles.mainView}>
      <Nav nameofApp="Awesome App"/>
      <View style={styles.basicView}>
      <Text style={styles.basicText}>Abcd</Text>
      </View>
      <View style={styles.basicView}>
      <Text style={styles.basicText}>XYZz</Text>
      </View>
      {
        hello ? <Text>Hello Everybody</Text> : null
      }
      <View>
        <Generate add={() => onAddRandom()}></Generate>
      </View>
      <ListItems items={random}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    marginTop : 40,
    alignItems:'flex-start',//x axis
    justifyContent:'flex-start'//y axis
  },
  basicView:{
    backgroundColor:'green',
    width:'100%',
    marginBottom:5,
  },
  basicText:{
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
    padding:20,
  }
})

export default App