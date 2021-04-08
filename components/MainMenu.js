import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native'
import { getQuestions } from '../api/openTDb'


const MainMenu = ({ navigation }) => {
    
    return (
        <View>
            <Text>Main Menu</Text>
            <Button
                title="Go to QuizBuilder"
            />
        </View>    
    )
}

export default MainMenu