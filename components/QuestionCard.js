import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button'
import { decode } from 'base-64'


const QuestionCard = ({ questionData }) => {
    
    const answers = questionData.incorrect_answers
    answers.splice(
        Math.floor(Math.random() * questionData.incorrect_answers.length),
        0,
        questionData.correct_answer
    )

    console.log(answers)
    return (
        <View style={styles.questionCard}>
            <Text>{decode(questionData.question)}</Text>
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