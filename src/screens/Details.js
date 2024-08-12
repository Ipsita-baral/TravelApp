import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome6';
const Details = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <>
            <View style={{flex:1}}>

                <ImageBackground source={item.image} style={styles.imagec} imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                    <TouchableOpacity style={{ marginTop: 34, marginLeft: 10 }} onPress={() => navigation.goBack()}>

                        <Icon name='keyboard-arrow-left' size={40} color='white' />
                    </TouchableOpacity>
                </ImageBackground>

                <Text style={styles.namei} >{item.name}</Text>

                <View style={styles.locat}>
                    <Icons name='location-dot' size={20} color='#4b4b4d' />
                    <Text style={styles.location}>{item.location}</Text>
                </View>
                <Text style={styles.tour}>Tour Details</Text>
                <Text style={styles.detail}>{item.details}</Text>
            </View>
            <View style={styles.touchbttn}>
                <TouchableOpacity style={styles.bttn}>
                    <Text style={styles.btn}>Book Now</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    imagec: {

        height: 320,
        width: '100%',

        // objectFit:'fill',
        // objectFit:'cover',
        // objectFit:'contain',

    },
    namei: {
        color: '#4b4b4d',
        fontSize: 35,
        fontWeight: '900',
        marginLeft: 10,
        width: 250,
        letterSpacing: .8,
        marginTop: 10,
    },
    location: {
        color: '#4b4b4d',
        // fontWeight: '800',
        letterSpacing: .6,
        marginLeft: 6,
        // marginTop:1,
        fontSize: 18
    },
    locat: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,

    },
    tour: {
        color: '#4b4b4d',
        fontWeight: '800',
        marginLeft: 10,
        marginVertical: 10,
        fontSize: 25

    },
    detail: {
        color: '#4b4b4d',
        marginLeft: 10,
        fontSize: 18,
        letterSpacing: .2,
    },
    btn: {
        color: 'white',
        // textAlign:'center'
        fontSize: 25,


    },
    bttn: {
        borderRadius: 8,
        backgroundColor: '#4b4b4d',
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',



    },
    touchbttn: {
        marginBottom:8,
        justifyContent: 'center',
        alignItems: 'center',

    }

})
export default Details;