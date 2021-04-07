import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native'
import { getQuestions } from './api/openTDb'


const Main = () => {
    const [ questions, setQuestions ] = useState([])

    const fetchQuestions = () => {
        return getQuestions()
        .then(response => {
            console.log(response)
            setQuestions(response.data.results)
        })
    }
    
    useEffect(() => {
        console.log('fetch questions called')
        fetchQuestions()
    },[])
    
    



    return (
        <View>
            <Text>Main Component</Text>
            {questions.map(question => {
                return(
                    <Text>{question.question}</Text>
                )
            })}
        </View>
    )
}

export default Main