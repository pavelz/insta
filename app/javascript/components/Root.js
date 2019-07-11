import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MainApp from './MainApp'
import PhotoReducer from  './PhotoReducer'

import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const store = createStore(PhotoReducer, {photos: []}, applyMiddleware(thunkMiddleware, loggerMiddleware))

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainApp />
            </Provider>
        )
    }
}
