import React from "react";
import { StyleSheet, Text,View } from "react-native";
import Nav from "./src/nav";


const App = () => {
  return (
    <View style = {styles.mainView}>
      <Nav>
        Hello There
      </Nav>
      <View style={styles.basicView}>
      <Text style={styles.basicText}>Abcd</Text>
      </View>
      <View style={styles.basicView}>
      <Text style={styles.basicText}>XYZz</Text>
      </View>
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