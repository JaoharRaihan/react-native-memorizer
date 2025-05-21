import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import colors from "../screen/config/colors"
function ListItem({image,title,subtitle}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
        <View style={styles.tcontainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    tcontainer:{
        padding: 20,
    },
    title:{
        fontWeight: "500",
    },
    subtitle:{
        Color: colors.medium,
    },
})

export default ListItem;