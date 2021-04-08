import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native'
import { getQuestions } from '../api/openTDb'

const QuizPage = () => {
    const [ questions, setQuestions ] = useState([])

    const fetchQuestions = () => {
        return getQuestions()
        .then(response => {
            console.log(response)
            setQuestions(response.data.results)
        })
    }

    useEffect(() => {
        fetchQuestions()
    },[])

    return (
        <View>
            {questions.map(question => {
                return(
                    // the response comes through encoded with base64 'atob()' converts this into a string
                    <Text>{atob(question.question)}</Text>
                )
            })}
        </View>
    )

}


export default QuizPage