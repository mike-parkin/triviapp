import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'



const MainMenu = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <Text>Main Menu</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to QuizBuilder"
                    onPress={() => navigation.navigate('QuizBuilder')}
                />
                <StatusBar style="light" />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="App Details"
                    onPress={() => navigation.navigate('Details')}
                />
                <StatusBar style="light" />
            </View>
        </View>    
    )
}

export default MainMenu

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginVertical: 10,
        width: '70%'
    }
})