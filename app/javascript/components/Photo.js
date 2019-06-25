import React from "react"
import PropTypes from "prop-types"
import {Provider} from "react-redux"
import {combineReducers, createStore} from "redux"

function  Photo(props) {
  return <React.Fragment><b>Photo</b> - {props.msg}</React.Fragment>
}

export default Photo
