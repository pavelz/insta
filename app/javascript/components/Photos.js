import React from "react"
import {addPhoto,deletePhoto} from "./PhotoActions";
import {store} from './Root'
import { connect } from 'react-redux'

class Photos extends React.Component {
    selectPhoto(e, photo){
        console.log(e.dispatch)
    }
    deletePhoto(photo){
        console.log("deleT")
        this.props.remove(photo)

    }
    render() {
        let {photos} = this.props
        console.log("Photos")
        console.log(photos)
        return (
            <React.Fragment>
                <b>Photos</b> - hello
                <br/>
                {photos.map(photo =>(
                        <React.Fragment key={photo.id}>
                            <b>{photo.name}</b><br/>
                            <img onClick={e => {this.deletePhoto(photo)}} src={photo.url}/>
                            <br/>
                        </React.Fragment>
                    )
                )}
                <b>EOL</b>
            </React.Fragment>
        )
    }
}

const mapSateToProps = (state, ownProps) => {
    const {photos} = state
    return {
        photos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: photo => dispatch(addPhoto(photo)),
        remove: photo => dispatch(deletePhoto(photo)),
        dispatch: e => dispatch(e)
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Photos)
