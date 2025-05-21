import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

function Wscreen(props) {
    return (
      <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/1.webp")}>
        <Image style={styles.l} source={require("../assets/1.jpg")}/>
        <Text style={styles.t}>You looks great</Text>
        <TouchableOpacity style={styles.buttons1}>
            <Button onPress={()=> console.log("Tap")
            } color={'red'} title='Log In'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons2}>
            <Button onPress={()=> console.log("ok")
            } color={'tomato'} title='sign up'/>
        </TouchableOpacity>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttons1:{
        width: "415",
        height: "70",
    },
    buttons2:{
        width:"415",
        height: "70"
    },
    l:{
        width: "300",
        height: "300",
        position: "absolute",
        top: "75",
    },
    t:{
        fontSize: 25,
        position: "absolute",
        top: "400",
        alignItems: "center",
        color: "#fff",
        paddingVertical:20,
    }

})

export default Wscreen;