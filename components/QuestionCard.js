import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button'
import { decode } from 'base-64'


const QuestionCard = ({ questionData, dispatch }) => {
    // sets the condition for the answerSelect function
    const [ isAnswered, setIsAnswered ] = useState(false)
    // randomly sort the answers for a question in an array     
    const answers = questionData.incorrect_answers
    answers.splice(
        Math.floor(Math.random() * questionData.incorrect_answers.length),
        0,
        questionData.correct_answer
        )
    const answerProps = answers.map(answer => {
        return { label: decode(answer), value: decode(answer)}
    })
    
    // handles the change of answers
    const handleAnswerSelect = (answer) => {
        
    }

    return (
        <View style={styles.questionCard}>
            <Text>{decode(questionData.question)}</Text>
            <RadioForm 
                radio_props={answerProps}
                labelHorizontal={true}
                initial={''}
                onChange={newValue => handleAnswerSelect(newValue)}
            />
        </View>
    )
}

export default QuestionCard

const styles = StyleSheet.create({
    questionCard: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 3
    }
})