import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import Iconsa from 'react-native-vector-icons/FontAwesome5';
import Iconsss from 'react-native-vector-icons/FontAwesome5';
import Icona from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/FontAwesome6';
import Categories from './categories';


const icons = [
 <Iconsa name="mountain" size={28} color="#edebeb" />,
 <Iconssss name="beach" size={28} color="#edebeb" />,
 <Iconsss name="hiking" size={28} color="#edebeb" />,
 <Icona name="flight" size={28} color="#edebeb" />,,
 <Iconss name="person-swimming" size={28} color="#edebeb" />,

]

const HomePage = () => {
  return (
    <>

    <View style={styles.contain}>
      <View style={styles.contains}>
        <TouchableOpacity style={styles.user}>
          <Icon name="face-woman-shimmer" size={28} color="#edebeb" />
        </TouchableOpacity>
      </View >
      <View style={styles.text}>
        <Text style={[styles.textstyle, styles.colr]} >Hello,</Text>
        <Text style={styles.textstyle}>what are you looking for?</Text>

        <View style={styles.search}  elevation={8}>
          <Icons name="search" size={20} color={'gray'} style={styles.sicon}/>
          <TextInput placeholder='Enter your name..' placeholderTextColor={'gray'}  style={{color:"black"}}/>
        </View>
      </View>
    </View>
      <View >
        <Categories icons={icons}/>
      </View>
      </>
  )
}
styles = StyleSheet.create({
  contain: {
    paddingVertical: 40,
    marginBottom:40,
    // flex:1,
    backgroundColor: '#21373b',
    flexDirection:"row-reverse",
    justifyContent:"space-around",
    position:'relative',
  },
  colr:{
    color:"white",
    fontSize: 35,
  },
  user: {
    width: 45,
    backgroundColor: 'gray',
    padding: 8,
    borderRadius: 40,
    marginVertical: 15,

  },
  contains: {
    
  
    // marginLeft: 10,
    
    
  },
  text: {
    // marginLeft: 15,
    // position:'relative',
  },
  textstyle: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: 32,
    width:250,
    color:'#f5f4f0',
    // marginBottom:40,

  },
  search: {
    position: 'absolute',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 330,
    borderRadius: 8,
    top:100,
    left:-5
   
  },
  sicon:{
    marginTop:14,
    marginHorizontal:8
  }

})

export default HomePage;