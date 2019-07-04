import React from "react"
import PropTypes from "prop-types"
import {fetchPhotos} from "./PhotoActions"
import PhotoReducer from "./PhotoReducer"
import Photo from "./Photo"
import About from "./About"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {createStore, applyMiddleWare} from "redux"

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger({})

const store = createStore(Photo, {}, applyMiddleWare(thunkMiddleware, loggerMiddleware))

class MainApp extends React.Component {
  componentDidMount() {
    console.log("mounted!")
    fetchPhotos(1)
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          <h1>MainApp Component</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/new">Post</Link>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/new" component={Photo}/>
        </Router>
     </React.Fragment>
    );
  }
}


function Home (props) {
  return(
    <React.Fragment>
      <h2> functional home </h2>
    </React.Fragment>
  );
}

MainApp.propTypes = {
  message: PropTypes.string
}

export default MainApp
