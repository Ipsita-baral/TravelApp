import { View, Text , StyleSheet, ImageBackground} from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Card = ({item}) => {
  return (
    
    <View>
      <ImageBackground source={item.image} style={styles.imagec} resizeMode='cover' imageStyle={{ borderRadius: 6}}>
        <Icon name='location-dot' size={20} style={styles.common}/>
        <Text style={[styles.imageText, styles.common]}>{item.location}</Text>
      </ImageBackground>
    </View>
      
  )
}

const styles =StyleSheet.create({
    imagec:{
        marginVertical:20,
        // marginHorizontal:10,
        flexDirection:'row',
        marginRight:5,
        height:150,
        width:200,
        flex:1,
        alignItems:'flex-end',
        // gap:3

       
        
    },
    imageText:{
        fontSize:20,
        color:'white',
        fontWeight:'900',
        marginTop:10
    },
    common:{
        marginBottom:10,
        marginLeft:8
    }
})

export default Card