import axios from 'axios'
// import isToken from '../reducer/isToken'

export const getUsers = () => {
    return (dispatch) => {
        dispatch({ type: 'REQUEST' })
        axios({
            method: "get",
            url: "https://newsapi.org/v2/top-headlines?country=id&apiKey=e668b32638184098bd3854ee46c82dd6",
        })
            .then((result) => {
                console.log('ini result', result.data)
                dispatch({ type: 'GET_USERS', payload: result.data.articles })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getSearch = (input) => {
    return (dispatch) => {
        dispatch({ type: 'REQUEST' })
        axios({
            method: "get",
            url: `https://newsapi.org/v2/everything?q=${input}&language=id&apiKey=e668b32638184098bd3854ee46c82dd6`,
        })
            .then((result) => {
                console.log('ini result search', result.data)
                dispatch({ type: 'GET_SEARCH', payload: result.data.articles })

                if (result.data.totalResults == 0) {
                    dispatch({ type: 'GET_SEARCH_NOT_FOUND', })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}