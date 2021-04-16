import { ADD_ANSWER, CLEAR_ANSWERS } from '../actions'

const intialState = []

const reducer = (state = intialState, action) => {
    switch(action.type){
        case ADD_ANSWER:
            return [...state, action.answer]
        case CLEAR_ANSWERS:
            return []
        default:
            return state
    }
}

export default reducer