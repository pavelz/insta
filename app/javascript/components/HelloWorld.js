import React from "react"
import PropTypes from "prop-types"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"

let store = createStore(() => [], {}, applyMiddleware)

class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      initial: "react component: "
    }
  }

  handleClick = () => {
    console.log("CLICK")
  }


  render () {
    return (
      <Provider store={store}>
        Greeting: {this.state.initial + this.props.greeting}
        <button onClick={this.handleClick} className="btn btn-primary">delete greeting</button>
      </Provider>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
