import React from "react"

class Photo extends React.Component {
    render() {
        let {photos} = this.props
        console.log("Photos")
        console.log(photos)
        return (
            <React.Fragment>
                <b>Photo</b> - hello
                <br/>
                {photos.map(photo =>(
                        <React.Fragment key={photo.id}>
                            <b>{photo.name}</b><br/>
                            <img src={photo.url}/>
                            <br/>
                        </React.Fragment>
                    )
                )}
                <b>EOL</b>
            </React.Fragment>
        )
    }
}

export default Photo
