import { SET_CORRECT_ANSWERS, CLEAR_CORRECT_ANSWERS } from '../actions'

const intialState = []

const reducer = (state = intialState, action) => {
    switch(action.type){
        case SET_CORRECT_ANSWERS:
            return action.answers
        case CLEAR_CORRECT_ANSWERS:
            return []
        default:
            return state
    }
}

export default reducer