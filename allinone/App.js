import { Button, View ,Text, flexDirection} from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      flexWrap: "wrap",
    }}>
      <View style={{
        backgroundColor: "gold",
        width: "100",
        height: "200",
        alignSelf: "flex-start",
      }}/>
            <View style={{
        backgroundColor: "red",
        width: "100",
        height: "400",
        flexBasis:"200",
        flexGrow: 1,
        flexShrink:1,
        flex: -1,
        alignSelf:"flex-start",
        top: "30",
        right:"20",
        position: "relative"
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: "100",
        height: "600",
        alignSelf:"flex-start",
      }}>
        <Button title='Click Here' onPress={()=>console.log("HI")
        }/>
        <Text>HIIII</Text>
      </View>
    </View>
  )
}