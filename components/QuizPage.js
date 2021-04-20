import React, { useState, useEffect } from 'react'
import { connect, useDispatch as dispatch } from 'react-redux'
import { decode } from 'base-64'
import {
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native'
import { getQuestions } from '../api/openTDb'
import { setCorrectAnswers } from '../actions/index' 

import QuestionCard from './QuestionCard'

const QuizPage = ({ navigation, route }) => {
    const form = route.params.form
    const [ questions, setQuestions ] = useState([])

    // const getCorrectAnswers = (questionSet) => {
    //     return questionSet.map(question => {
    //         return decode(question.correct_answer)
    //     })
    // }

    const fetchQuestions = (form) => {
        return getQuestions(form)
        .then(response => {
            console.log(response.data.results)
            const questionSet = response.data.results
            setQuestions(questionSet)
            // dispatch(setCorrectAnswers(getCorrectAnswers(questionSet)))
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
                    <QuestionCard questionData={question} key={question.id} />
                )
            })}
        </View>
    )
}

export default connect()(QuizPage)



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