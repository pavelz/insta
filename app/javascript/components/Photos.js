import React from "react"
import {addPhoto,deletePhoto} from "./PhotoActions";
import { connect } from 'react-redux'

class Photos extends React.Component {
    selectPhoto(e, photo){
    }
    deletePhoto(photo){
        this.props.remove(photo)

    }
    render() {
        let {photos} = this.props
        return (
            <React.Fragment>
                <b>Photos</b> - hello
                <br/>
                {photos.map(photo =>(
                        <React.Fragment key={photo.id}>
                            <b>{photo.name}</b><br/>
                            {(() => {
                                switch(photo.class) {
                                    case 'Photo':
                                        return (<div><a href={photo.around_url}>{photo.location_name}</a> <br/> <img onClick={e => { this.deletePhoto(photo) }} src={photo.url}/></div>)
                                    case 'Video':
                                        return <embed src={photo.url}/>
                                }
                            })()}
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
