import React from 'react'

class UploadVideo extends React.Component {
    triggerUpload(){
        console.log("triggered!")
    }
    render(){
        console.log("render!")
        return (
            <React.Fragment>
             FILE:
             <input key="one" id="upload" type="file" onChange={this.triggerUpload}/>
            </React.Fragment>
        )
    }
}

export default UploadVideo