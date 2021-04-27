export const ADD_ANSWER = 'ADD_ANSWER'
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS'
export const CHANGE_ANSWER = 'CHANGE_ANSwER'

export const SET_CORRECT_ANSWERS = 'SET_CORRECT_ANSWERS'
export const CLEAR_CORRECT_ANSWERS = 'CLEAR_CORRECT_ANSWERS'


export function addAnswer(answer) {
    return {
        type: ADD_ANSWER,
        answer: answer
    }
}

export function clearAnswers() {
    return {
        type: CLEAR_ANSWERS
    }
}

export function changeAnswer(answer) {
    return {
        type: CHANGE_ANSWER,
        answer: answer 
    }
}

export function setCorrectAnswers(answers) {
    return {
        type: SET_CORRECT_ANSWERS,
        answers: answers
    }
}

export function clearCorrectAnswers() {
    return {
        type: CLEAR_CORRECT_ANSWERS
    }
}




