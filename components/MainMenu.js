import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native'



const MainMenu = ({ navigation }) => {
    
    return (
        <View>
            <Text>Main Menu</Text>
            <Button
                title="Go to QuizBuilder"
                onPress={() => navigation.navigate('QuizBuilder')}
            />
        </View>    
    )
}

export default MainMenu