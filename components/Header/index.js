import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default ( {navigation} ) => {
    const [val, setValue] = useState('');
    console.log(val)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name='md-home' size={30}/>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setValue(text)}
                value={val}/>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Items', {query: val})
                setValue('')
            }}>
                <Ionicons name='md-search' size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 5,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    },
    input:{
        height: 30,
        flex: 1,
        backgroundColor: "#ddd",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1
    }
})