import React from "react"
import PropTypes from "prop-types"
import PhotoActions from "./PhotoActions"
import PhotoReducer from "./PhotoReduce"
import Photo from "./Photo"
import About from "./About"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {createStore} from "redux"

const store = createStore(Photo)

class MainApp extends React.Component {
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
