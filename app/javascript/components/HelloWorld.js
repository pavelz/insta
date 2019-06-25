import React from "react"
import PropTypes from "prop-types"
import {Provider} from "react-redux"
import {combineReducers, createStore} from "redux"
import Photo from "./Photo"


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
const store = createStore(reducer)

class HelloWorld extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      initial: "react component: "
    }
  }

  handleClick = () => {
    console.log("CLICK")
    console.log(store.getState())
    store.dispatch({type: "YES", text: "hello"})
    console.log(store.getState())
  }


  render () {
    return (
      <Provider store={store}>
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
