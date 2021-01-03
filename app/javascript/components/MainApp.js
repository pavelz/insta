import React from "react";
import PropTypes from "prop-types";
import { fetchPhotos } from "./PhotoActions";

import { connect } from "react-redux";
import Photos from "./Photos";
import Video from "./Video";
import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Grid, Row } from "react-flexbox-grid";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPhotos(1));
  }
  render() {
    const { photos } = this.props;
    return (
      <React.Fragment>
        <Router>
          <Grid fluid>
            <Row
              className="wtf center-xs"
              style={{ "justify-content": "center", "text-align": "center" }}
            >
              <Link className="btn btn-secondary margin-left-10" to="/">
                Home
              </Link>
              <Link className="btn btn-secondary margin-left-10" to="/about">
                About
              </Link>
              <Link className="btn btn-secondary margin-left-10" to="/new">
                Post
              </Link>
              <Link className="btn btn-secondary margin-left-10" to="/upload">
                Upload
              </Link>
            </Row>
          </Grid>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/new" component={Photos} />
          <Route path="/upload" component={Video} />
        </Router>
        <div>
          <Photos />
        </div>
      </React.Fragment>
    );
  }
}

function Home(props) {
  return <React.Fragment></React.Fragment>;
}

MainApp.propTypes = {
  photos: PropTypes.array.isRequired,
  message: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { photos } = state;
  return {
    photos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: () => dispatch({ type: "DELETE_PHOTO" }),
    add: () => dispatch({ type: "ADD_PHOTO" }),
    dispatch: (param) => dispatch(param),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
