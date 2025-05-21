import React from 'react';
import { Button, Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from './config/colors';

function Viewimagescreen(props) {
    return (
<View style={styles.container}>
        <View style={styles.baci}>
          <Image resizeMode="contain" source={require("../assets/1.jpg")}/>
        <View style={styles.butt}>
          <MaterialCommunityIcons name="close" color="White" size={30}/>
        </View>
        <View style={styles.buttt}>
          <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/>
        </View>
        </View>
</View>        
    )
  }

const styles = StyleSheet.create({
    container:{
      backgroundColor: colors.black,
      flex: 1,
    },
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
      width: "100%",
      height: "100%",   
    },
});
export default Viewimagescreen;