import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import useFetch from '../../hooks/useFetch';


export default ({ navigation }) => {
    const id = navigation.getParam('id'),
          {loading, data} = useFetch(`https://serverlessbuscador.federodfr.now.sh/api/items/${id}`),
          item = data && data.item || {};
        console.log(loading, item.title)
    return (
        <ScrollView style={styles.container}>
           { loading ? <Text>Loading</Text>:
           <>
           <View style={styles.imageContainer}>
                <Image 
                source={{uri: item.picture}}
                style={styles.image}/>
            </View>
                <Text style={styles.condition}>{item.condition} - {item.sold_quantity} vendidos</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price.currency}{item.price.amount},{item.price.decimals}</Text>
                <Button title='comprar' onPress={() => {}}/>
                <View style={styles.description}>
                    <Text style={styles.titleDescription}>Descripcion del producto</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
            </>
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        padding: 8
    },
    imageContainer:{
        height: 500,
    },
    image:{
        height: 500,
        width: 'auto'
    },
    condition: {
        fontSize: 12,
        color: '#666',
    },
    title: {
        fontSize: 24,
    },
    price: {
        fontSize: 32,
    },
    description: {
        paddingVertical: 16,
    },
    titleDescription: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 16
    }
})
