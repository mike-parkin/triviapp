import { combineReducers } from 'redux'

import quizUserAnswers from './quizUserAnswers'
import quizCorrectAnswers from './quizCorrectAnswers'

const reducers = combineReducers({
    quizUserAnswers,
    quizCorrectAnswers
})

export default reducers