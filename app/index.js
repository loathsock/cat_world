import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello, friend</Text> 
        <Text style={styles.subtitle}> This is a little app I made that generates cute cute images : )</Text>
        <View style={styles.touchableContainer}>
        <TouchableOpacity style={styles.touchableButton}>
             <Link style={styles.buttonText} href='/main'> Main </Link> 
        </TouchableOpacity> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    maxWidth: 1900,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  buttonText : {
     color : "white"
  }, 
  touchableContainer: {
    display: "flex",
    width: "100%",
    height:  "10%",
    justifyContent: "center",
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 40
  }, 
  touchableButton : {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    width: "50%", 
    height: '75%',
    backgroundColor: '#2ea2bf'  
  } 
});
