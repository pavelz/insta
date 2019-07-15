import React from "react"
import PropTypes from "prop-types"
import {Provider} from "react-redux"
import {combineReducers, createStore} from "redux"
import Photos from "./Photos"


function hey(state = [], action){
  console.log("reducer")
  switch(action.type){
    case "YES":
      console.log("reducer YES")
      return [{faux_wizard: "yes"}]
  }
  return state
}

const reducer = combineReducers({ hey })
const storage = createStore(reducer)

class HelloWorld extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      initial: "react component: "
    }
  }

  handleClick = () => {
    console.log("CLICK")
    console.log(storage.getState())
    storage.dispatch({type: "YES", text: "hello"})
    console.log(storage.getState())
  }


  render () {
    return (
      <Provider storage={storage}>
        Greeting: {this.state.initial + this.props.greeting}
        <button onClick={this.handleClick} className="btn btn-primary">delete greeting</button>
        <Photo msg="Glorious"/>
      </Provider>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
