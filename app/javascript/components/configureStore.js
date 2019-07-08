import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import photoReducer from './PhotoReducer'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        photoReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}