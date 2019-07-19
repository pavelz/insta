import React from 'react'
import Button from './Button'


class UploadVideo extends React.Component {
    constructor(props){
        super(props)
        this.state = { status: (<React.Fragment>&nbsp;</React.Fragment>) }
    }
    triggerUpload(e, item){
        console.log(e.target.files)
        console.log(e.target.form['authenticity_token'])
        let file = e.target.files[0]
        let form = new FormData()
        form.append("video[video]", file)
        form.append("video[name]", file.name)

        fetch("/videos", {
            method: 'POST',
            body: form,
            headers: {
                "X-CSRF-Token": e.target.form['authenticity_token'].value
            }
        })
            .then(response => {
                if (response.ok) {
                    this.setState({status: (<div className="text-success">Uploaded successfully</div>)})
                    return response.json()
                } else {
                    console.log(this.state)
                    this.setState({status: (<div className="text-danger">Error uploading.</div>)})
                    let error = response.status
                    console.log("An error occured: ", error)
                    return null
                  }
                }, error => console.log("rejected promise error: ", error))
            .then(json => {
                if( json != null ) {
                    console.log("Successfuly uploaded")
                }
             })
        // trigger redux reload?
    }
    render(){
        console.log("render!")
        const token = $('meta[name="csrf-token"]').attr('content')

        return (
            <React.Fragment>
                <form action="/videos" method="post">
                    <input type="hidden" name="authenticity_token" value={token} readOnly={true} />
                    <Button name="Upload!" type="file" title="Choose your file ..." change={this.triggerUpload.bind(this)}>
                        Upload!
                    </Button>
                    {this.state.status}
                </form>
            </React.Fragment>
        )
    }
}

export default UploadVideo