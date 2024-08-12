import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import React from 'react';
import places from '../data/places';
import Card from './Card';
import CardRecomended from './CardRecomended';

const categories = ({ icons }) => {
    return (
        <ScrollView >
            <View>
                <Text style={styles.categories} >
                    Categories
                </Text>
            </View>

            <View style={styles.imageIcon}>
                {icons.map((item, i) => {
                    return (
                        <View style={styles.image} key={i}>
                            {item}
                        </View>
                    )
                })}
            </View>
            <View>
            {/* <Text style={styles.categories}>Places</Text> */}
            <FlatList
                style={{ marginHorizontal: 5 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={places}
                renderItem={({ item }) => <Card item={item} />
                } />

            </View>
            <View>
                <Text style={styles.categories}>Recomended</Text>
                <FlatList
                    style={{ marginHorizontal: 5, marginBottom: 250 }}
                    keyExtractor={(item) => item.id}
                    data={places}
                    renderItem={({ item }) =>

                        <CardRecomended item={item} />
                    }
                />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageIcon: {

        // flex:1,
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        marginHorizontal: 20,

    },

    image: {
        // flex:1,
        // flexDirection: 'row',
        backgroundColor: '#bfbaba',
        padding: 15,
        borderRadius: 10

    },
    categories: {
        color: 'black',
        // marginTop:50,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: '900'
    },

})

export default categories