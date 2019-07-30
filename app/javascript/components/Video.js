import React from 'react'
import Button from './Button'
import {uploadVideo} from './UploadVideoActions'

class Video extends React.Component {
    constructor(props){
        super(props)
        this.state = { status: (<React.Fragment>&nbsp;</React.Fragment>) }
    }
    triggerUpload(e, item){

        let file = e.target.files[0]
        uploadVideo(file, e.target.form['authenticity_token'].value)
    }
    render(){
        const token = $('meta[name="csrf-token"]').attr('content')

        return (
            <React.Fragment>
                <div className="mt-1">
                <form action="/videos" method="post">
                    <input type="hidden" name="authenticity_token" value={token} readOnly={true} />
                    <Button name="Upload!" type="file" title="Choose your file ..." change={this.triggerUpload.bind(this)}>
                        Upload!
                    </Button>
                    {this.state.status}
                </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Video