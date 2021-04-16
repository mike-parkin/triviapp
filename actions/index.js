export const ADD_ANSWER = 'ADD_ANSWER'
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS'

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
