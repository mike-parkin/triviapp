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
            <Button
                title="Go to QuizBuilder"
                onPress={() => navigation.navigate('QuizBuilder')}
            />
            <StatusBar style="light" />
        </View>    
    )
}

export default MainMenu

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd' 
    }
})