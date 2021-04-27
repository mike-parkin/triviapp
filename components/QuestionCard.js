import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { useId } from 'react-id-generator'
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button'
import { decode } from 'base-64'
import { addAnswer, changeAnswer } from '../actions'


const QuestionCard = ({ questionData, dispatch }) => {
    const [ htmlId ] = useId()

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
        console.log('hi')
        const payLoad = {
            questionId: htmlId,
            answer
        }
        if(!isAnswered) {
            dispatch(addAnswer(payLoad))
            setIsAnswered(true)
        } else {
            // use a new action to edit the array in store
            dispatch(changeAnswer(payLoad))
        }
    }

    return (
        <View style={styles.questionCard} key={htmlId}>
            <Text>{decode(questionData.question)}</Text>
            <RadioForm 
                radio_props={answerProps}
                labelHorizontal={true}
                initial={''}
                onPress={newValue => handleAnswerSelect(newValue)}
            />
        </View>
    )
}

export default connect()(QuestionCard)

const styles = StyleSheet.create({
    questionCard: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 3
    }
})