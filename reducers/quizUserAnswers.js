import { ADD_ANSWER, 
        CLEAR_ANSWERS,
        CHANGE_ANSWER
} from '../actions'

const intialState = []

const reducer = (state = intialState, action) => {
    switch(action.type){
        case ADD_ANSWER:
            return [...state, action.answer]
        case CLEAR_ANSWERS:
            return []
        case CHANGE_ANSWER:
            return state.map(answer => {
                if (answer.id === action.answer.id) {
                    return action.answer
                }
                return answer
            })
        default:
            return state
    }
}

export default reducer