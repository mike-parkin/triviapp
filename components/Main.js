import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native'
import { getQuestions } from '../api/openTDb'


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
        fetchQuestions()
    },[])
    
    return (
        <View>
            <Text>Main Component</Text>
            {questions.map(question => {
                return(
                    // the response comes through encoded with base64 'atob()' converts this into a string
                    <Text>{atob(question.question)}</Text>
                )
            })}
            <Button onPress={} />
        </View>
    )
}

export default Main