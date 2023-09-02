import {View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react'; 
import { useRouter, useRootNavigationState } from 'expo-router';

const API_KEY = 'live_wcenGEYe6FCJnx8ePWTt8HQ90BberjwaPTUKbHh5FvqS3KSqj16MjuE3qm48gG60'

export default function main() {
   const router = useRouter()

   const goBackFun = () => {
    router.back()
   }


    const [displayMainPage, setdisplayMainPage] = useState(true)
   const [data, setData] = useState('https://cdn2.thecatapi.com/images/d19.jpg')
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)

   const changeOnPress = () => {
     axios({
       method: 'get',
       url: `https://api.thecatapi.com/v1/images/search`,  
     }).then((response) => {
       setData(response.data[0].url)
        console.log(response.data[0].url); 
      //  console.log(response.data[0].url);
     });
   }
useEffect(() => {
  
     axios({
      method: 'get',
      url: `https://api.thecatapi.com/v1/images/search`,  
    }).then((response) => {
      setData(response.data[0].url)
       console.log(response.data[0].url); 
     //  console.log(response.data[0].url);
    });
  
}, [])




  return (
  
    
    <>
      {displayMainPage ? 
            <SafeAreaView style={styles.container}>
             <Image 
               style={{width: "100%", height: "70%", maxHeight: 1200 }}
                 source={{uri: data}}
                 resizeMode="contain"
              />
             
             <View style= {{ display: "flex", justifyContent: "space-around", alignItems: 'center', height: "30%"}}>
              <TouchableOpacity onPress={changeOnPress} style={{display: "flex", justifyContent: "center", alignItems: 'center',  height: 60, width: 130, backgroundColor: 'green', borderRadius: 10}}>
                    <Text style={{fontSize: 24, color: 'white'}}>
                          Tap here
                    </Text>

                    
              </TouchableOpacity>

             
                   <Image  
                    style={{ height: "70%", width: "90%"}}
                    source={require('../assets/catpaw.svg')} 
                    // onPress={goBackFun}
                 resizeMode="contain" />
                      
                 

                    
             

                    {/* <TouchableOpacity style={{ width: 140, height: 100, display: 'flex', justifyContent : "center", alignItems: "center",  backgroundColor: '#ab4ef2'}} /> 
                      <Text>
                           Go back!

                      </Text>
                     
                    <TouchableOpacity/> */}

             </View>
                
    </SafeAreaView> :  <> <Text>
              Sorry, the images service provider may be down. 
      </Text> </>  
    }
    
   </>
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ededed'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
