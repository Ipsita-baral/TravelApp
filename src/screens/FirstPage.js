import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const FirstPage = (props) => {
    return (

        <ImageBackground source={require('../assets/images/travel.jpeg')}
            style={styles.image} resizeMode='cover'>
            <View style={styles.container}>
                <Text style={styles.text}>Enjoy the world</Text>
                <Text style={styles.textf}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat </Text>
                <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('home')}>
                    <Icon name="right" size={30} color="orange" />
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    image: {
        // height: 500,
        height: '100%',
          width:'100%',
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        marginBottom:50

    },
    text: {
        fontSize: 45,
        color: 'white',
        fontWeight: "bold",
        marginBottom:10
    },
    textf: {
        width: 300,
        textAlign: "center",
        color: 'white',
        fontSize: 18,
        marginBottom:20,
        
        fontWeight:'bold'
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 6,
    }

})

export default FirstPage
