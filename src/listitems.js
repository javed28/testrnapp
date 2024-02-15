import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItems = ({items}) =>{
    return(
        items.map((item)=>(
            <View style={style.listItem}>
            <Text>{item}</Text>
        </View>
        ))
        
    )
}

const style = StyleSheet.create({
    listItem : {
        backgroundColor:'#ececec',
        padding:10,
        width:'100%',
        marginTop:5,
        alignItems:'center'
    }
});

export default ListItems