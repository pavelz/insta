import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MainApp from './MainApp'
import PhotoReducer from  './PhotoReducer'

import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
export const store = createStore(
    PhotoReducer,
    {photos: []}, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f))

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainApp />
            </Provider>
        )
    }
}
