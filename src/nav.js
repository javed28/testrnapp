
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Nav = ({nameofApp}) => {
    return(
        <View style={navStyle.basicText}>
            <Text>{nameofApp}</Text>
        </View>
    )
}

const navStyle = StyleSheet.create({
    basicText : {
        backgroundColor:'blue',
        padding:10,
        width:'100%',
        alignItems:'center'
    }
})

export default Nav
