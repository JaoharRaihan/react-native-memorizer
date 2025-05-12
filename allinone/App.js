import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Alert } from 'react-native';

export default function App() {
  const a=()=>console.log("Click on it");
  const b=()=>console.log("YAHHH");
  
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} >WE write all of core component here</Text>
      <Image source={require("./assets/icon.png")}/>
      <TouchableOpacity onPress={a}>
      <Image source={{
        uri:"https://picsum.photos/200/300",
        width:200,
        height:300,
      }}/>
      </TouchableOpacity>
      <Button color="orage" title='Click HERE' onPress={b}/>
      <Button color="red" title='click here' onPress={()=>alert("yahhh")}/>
      <Button 
      color="blue" 
      title='click here' 
      onPress={()=>Alert.alert("Answer it","How are you",
      [{text:"Good", onPress:()=>console.log("Good")},
      {text:"Bad", onPress:()=> console.log("Bad")},
      ])}/>
      <Button 
      color="#fff"
      title='Click here'
      onPress={()=>Alert.prompt("Answer it","How are you",(text)=>console.log(text))}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
