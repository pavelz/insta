import React from "react"
import PropTypes from "prop-types"
import {Provider} from "react-redux"
import {combineReducers, createStore} from "redux"

class Photo extends React.Component {
    render() {
        return (
            <React.Fragment><b>Photo</b> - hello</React.Fragment>
        )
    }
}


export default Photo
