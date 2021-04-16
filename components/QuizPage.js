import React, { useState, useEffect } from 'react'
import { decode } from 'base-64'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native'
import { getQuestions } from '../api/openTDb'

const QuizPage = ({ navigation, route }) => {
    const form = route.params.form
    const [ questions, setQuestions ] = useState([])

    const fetchQuestions = (form) => {
        return getQuestions(form)
        .then(response => {
            console.log(response)
            setQuestions(response.data.results)
        })
    }

    useEffect(() => {
        console.log(form);
        fetchQuestions(form)
    },[])

    return (
        <View style={styles.container}>
            {questions.map(question => {
                return(
                    // the response comes through encoded with base64 'atob()' converts this into a string
                    <View style={styles.questionCard}>
                        <Text>{decode(question.question)}</Text>
                    </View>
                )
            })}
        </View>
    )
}


export default QuizPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    questionCard: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    }
}) 