const intiateState = {
    users: [],
    isLoading: true,
    search: [],
    kosong: null
}

const indexReduer = (state = intiateState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case 'GET_SEARCH':
            return {
                ...state,
                search: action.payload,
                isLoading: false,
                kosong: false
            }
        case 'GET_SEARCH_NOT_FOUND':
            return {
                ...state,
                kosong: true
            }
        case 'REQUEST':
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

export default indexReduer