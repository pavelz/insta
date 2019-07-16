import React from 'react'

class UploadVideo extends React.Component {
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
            .then(response => response.json(), error => console.log("An error occured", error))
            .then(json => console.log("Successfuly uploaded"))
    }
    render(){
        console.log("render!")
        const token = $('meta[name="csrf-token"]').attr('content')

        return (
            <React.Fragment>
                <form action="/videos" method="post">
                    <input type="hidden" name="authenticity_token" value={token} readOnly={true} />

                     FILE:<br/>
                     <input key="one" id="upload" type="file" onChange={this.triggerUpload.bind(this)}/>
                </form>
            </React.Fragment>
        )
    }
}

export default UploadVideo