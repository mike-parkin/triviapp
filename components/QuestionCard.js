import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button'
import { decode } from 'base-64'


const QuestionCard = ({ questionData }) => {
    

    console.log(questionData)

    return (
        <Text>I am a QuestionCard</Text>
    )
}

export default QuestionCard