import React from 'react';
import { SafeAreaView, View,Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';

function Card({title,subtitle,image}) {
    return (
        <View style={styles.firstlay}>
            <Image style={styles.img} source={image}/>
            <View style={styles.tt}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

        </View>
    )};

const styles = StyleSheet.create({
    firstlay:{
       backgroundColor: "#fff",
       borderRadius: 15,
       marginBottom: 20,
       overflow: "hidden",
    },
    img:{
        width: "400",
        height: "200",
    },
    tt:{
        padding:20,
    },
    title:{
        marginBottom: 7,
    },
    subtitle: {
        color: "red",
        fontWeight: "bold"
    }
})

export default Card;