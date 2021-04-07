import axios from 'axios'

const baseUrl = 'https://opentdb.com/api.php?amount=10'

export const getQuestions = () => {
    return axios.get(baseUrl)
        .then(response => response)
}