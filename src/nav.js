
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Nav = (props) => {
    return(
        <View style={navStyle.basicText}>
            <Text>Header</Text>
            <Text>{props.children}</Text>
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
