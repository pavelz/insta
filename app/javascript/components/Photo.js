import React from "react"

class Photo extends React.Component {
    render() {
        let {photos} = this.props
        console.log("Photos")
        console.log(photos)
        return (
            <React.Fragment>
                <b>Photo</b> - hello
                {photos.map(photo =>(
                        <img key={photo.id} href={photo.url}/>
                    )
                )}
                <b>EOL</b>
            </React.Fragment>
        )
    }
}

export default Photo
