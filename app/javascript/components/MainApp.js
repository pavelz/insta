import React from "react"
import PropTypes from "prop-types"
import {fetchPhotos} from "./PhotoActions"
import PhotoReducer from "./PhotoReducer"

import {connect} from  'react-redux'
import Photos from "./Photos"
import UploadVideo from "./UploadVideo"
import About from "./About"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import { Grid, Row, Col } from 'react-flexbox-grid';


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
                    <Grid fluid>
                        <Row className="center-xs">
                            <Col xs={1} md={1}>
                                <Link className="btn btn-secondary" to="/">Home</Link>
                            </Col>
                            <Col xs={1} md={1}>
                                <Link className="btn btn-secondary" to="/about">About</Link>
                            </Col>
                            <Col xs={1} md={1}>
                                <Link className="btn btn-secondary" to="/new">Post</Link>
                            </Col>
                            <Col xs={1} md={1}>
                                <Link className="btn btn-secondary" to="/upload">Upload</Link>
                            </Col>
                        </Row>
                    </Grid>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/new" component={Photos}/>
                    <Route path="/upload" component={UploadVideo}/>
                </Router>
                <div>
                   <Photos/>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
