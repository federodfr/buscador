import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch'

export default ({ navigation }) => {
    let query = navigation.getParam('query'),
        {loading, data} = useFetch(`https://serverlessbuscador.federodfr.now.sh/api/items/?q=${query}`),
        items = data && data.items || [];

    return(
        <View style={styles.container}>

            {loading ? <Text> Loading ...</Text> :
            <FlatList
                data={items}
                keyExtractor= { x => x.id}
                renderItem= {({ item }) => 
                <ItemList item={item} onPress={() => navigation.navigate('Product',{id: item.id})}/>}
            />}
        </View>
    )
}

const ItemList = ({onPress, item}) => {
    let { picture, price, title, location, free_shipping } = item,
        {currency, amount, decimals} = price;
    return(
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Image 
                source={{uri: picture}}
                style={styles.image}/>
            <View style={styles.description}>
                <Text style={styles.price}> {currency}{amount},{decimals}</Text>
                <Text numberOfLines={2} style={styles.titleItem}> { title }</Text>
            </View>
            <Text style={styles.location}> { location }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eee',
    },
    item:{
        padding: 8,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: '#eee',
        borderBottomWidth:1,
        justifyContent : 'space-between'
    },
    image: {
        width: 72, 
        height: 72,
        borderRadius: 4,
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
        marginHorizontal: 8,
    },
    price:{
        fontSize:18,
        paddingVertical: 4,
    },
    titleItem:{
        fontSize: 14,
        paddingVertical: 4
    },
    location:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        fontSize: 12,
        color: '#666',
        textAlign:'center'
    }
})