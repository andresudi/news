import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from '../store/reducer/indexReducer'

const rootReducers = combineReducers({
    indexReducer
})

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store