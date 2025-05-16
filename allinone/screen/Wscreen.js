import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function Wscreen(props) {
    return (
      <ImageBackground style={styles.background} source={require("../assets/1.webp")}>
        <Image style={styles.l} source={require("../assets/1.jpg")}/>
        <Text style={styles.t}>You looks great</Text>
        <View style={styles.buttons1}>
            <Button color={'red'} title='Log In'/>
        </View>
        <View style={styles.buttons2}>
            <Button color={'tomato'} title='sign up'/>
        </View>
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
        position: "absolute",
        top: "400",
        alignItems: "center",
        color: "#fff"
    }

})

export default Wscreen;