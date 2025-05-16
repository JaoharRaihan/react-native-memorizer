import React from 'react';
import { Button, Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';


function Viewimagescreen(props) {
    return (
<ImageBackground>
        <View style={styles.baci}>
          <Image source={require("../assets/1.jpg")}/>
        <View style={styles.butt}>
            <Button color={'tomato'} title='next'/>
        </View>
        <View style={styles.buttt}>
          <Button color={'tomato'} title='pre..'/>
        </View>
        </View>
</ImageBackground>        
    )
  }

const styles = StyleSheet.create({
    butt:{
      position: "absolute",
      top: "65",
      right: "-58",
      paddingTop: Platform.OS==='android',
       },
    buttt:{
      position: "absolute",
      top: "65",
      left:"5",
      paddingTop: Platform.OS==='android',
    },
    baci:{
      flex:1,
      alignContent: "center",
      alignItems: "center",
      width: "350",
      height: "100"
    }
});
export default Viewimagescreen;