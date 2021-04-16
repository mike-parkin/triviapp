import axios from 'axios'

const baseUrl = 'https://opentdb.com/api.php?amount='
const encode = '&encode=base64'

const catUrl = 'https://opentdb.com/api_category.php'

const createRequestUrl = (form) => {
    let requestUrl = baseUrl + form.num
    if (form.category !== '') {
        requestUrl += '&category=' + form.category
    }
    if (form.difficulty !== '') {
        requestUrl += '&difficulty=' + form.difficulty
    }
    return requestUrl
}

export const getQuestions = (form) => {
    const getUrl = createRequestUrl(form) + encode
    console.log(getUrl)
    return axios.get(getUrl)
        .then(response => response)
}

export const getCategories = () => {
    return axios.get(catUrl)
        .then(response => {
            return response.data.trivia_categories
        })
}