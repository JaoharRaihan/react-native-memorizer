import React from 'react';
import { View,StyleSheet, Image, Text, } from 'react-native';
import ListItem from "../screen/ListItem";

function Carddetails(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/1.jpg")}/>
            <View style={styles.detailscontainer}>
                <Text style={styles.title}>Want to sell a t-shirt</Text>
                <Text style={styles.subtitle}>$100</Text>
            <View style={styles.iteam}>
                <ListItem
                image={require("../assets/1.jpg")}
                title="Raihan"
                subtitle="5 Star Ratings"
                />
            </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailscontainer:{
        padding:20,
    },
    image: {
        width:"100%",
        height:"300",
    },
    title:{
        fontSize: 20,
        fontWeight: "500",
    },
    subtitle:{
        fontSize: 18,
        fontWeight:"500",
        fontVariant: "Bold",
        color: "#4ecdc4"
    },
    iteam:{
        marginVertical:20,
    },
})

export default Carddetails;