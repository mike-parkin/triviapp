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
        <View style={styles.questionCard}>
            <Text>Quiz Me with your rhythm stick</Text>
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