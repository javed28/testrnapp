
import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Generate = ({add}) => {
    return(
        <TouchableHighlight
        onPress={()=> add()}
        underlayColor="red"
        activeOpacity={0.1}
        >
        <View style={generateStyle.generate}>
            <Text style={{color:"#fff"}}>Add Number</Text>
        </View>
        </TouchableHighlight>
    )
}

const generateStyle = StyleSheet.create({
    generate : {
        backgroundColor:'#00BCD4',
        padding:10,
        width:'100%',
        alignItems:'center'
    }
})

export default Generate
