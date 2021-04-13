import axios from 'axios'

const baseUrl = 'https://opentdb.com/api.php?amount=10&encode=base64'

const catUrl = 'https://opentdb.com/api_category.php'

export const getQuestions = () => {
    return axios.get(baseUrl)
        .then(response => response)
}

export const getCategories = () => {
    return axios.get(catUrl)
        .then(response => {
            response.trivia_categories
        })
}