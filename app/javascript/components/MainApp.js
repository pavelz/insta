import React from "react"
import PropTypes from "prop-types"
import {fetchPhotos} from "./PhotoActions"
import PhotoReducer from "./PhotoReducer"

import {connect} from  'react-redux'
import Photo from "./Photo"
import About from "./About"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"


class MainApp extends React.Component {
  constructor(props){
    super(props)
      console.log(props)
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchPhotos(1))
  }
   render(){
      console.log("RENDER!")
        const {photos} = this.props
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
                <Photo photos={photos}/>
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
  photos: PropTypes.array.isRequired,
  message: PropTypes.string,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps ( state ) {
    const { photos } = state
    return {
        photos
    }
}

const mapDispatchToProps = dispatch => {
    console.log('mapDispatch')
    return {
        delete: () =>  dispatch({type: 'DELETE_PHOTO'}),
        add: () => dispatch({type: 'ADD_PHOTO'}),
        dispatch: (param) => dispatch(param)
    }
}

export default connect(mapStateToProps)(MainApp)
