import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Details = () => {
    return (
        <View style={styles.container} >
            <Text>Details to go here</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    }
})