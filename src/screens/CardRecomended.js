import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CardRecomended = ({ item }) => {
    const Navigation = useNavigation();

   const handlePressBtn = () =>{
Navigation.navigate('details', {item} )
   }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
            <TouchableOpacity onPress={handlePressBtn}>
                <ImageBackground source={item.image} style={styles.image}>
                    <Text style={styles.text}>{item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    image: {

        marginVertical: 10,
        height: 300,
        width: 340,
        backgroundColor: 'blue',

    },
    text:{
        fontSize:30,
        marginLeft:10,
        fontWeight:'900',
        color:'white'
    }

})

export default CardRecomended;