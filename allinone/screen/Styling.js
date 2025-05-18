import React from 'react';
import { View, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function Styling(props) {
    return (
     <View style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
     }}>
        <View style={{
            backgroundColor: "tomato",
            width: "100",
            height: "100",
            borderWidth: "10",
            borderColor: "blue",
            borderRadius: "10",
            borderRightWidth: "50",
            borderTopLeftRadius: "50",
            shadowColor: "red",
            shadowOffset: {width: "100", height: "100"},
            shadowOpacity: "1",
            shadowRadius: "10",
            elevation: "30",
            padding: "20",
            paddingHorizontal: "30",
            paddingRight: "20",
        }}>
            
        </View>
        <View> 
            <Text style={{
            fontsize: "30",
            fontstyle: "ita;ic",
            fontwidth: "30",
            color: "black",
            textTransform: "lowercase",
            textAlign: "justify",
            }}>Some Text</Text>
        </View>

        <MaterialCommunityIcons name='email' size={60}/>
     </View>
    );
}

export default Styling;