import fetch from 'cross-fetch'
import {store} from "./MainApp"
export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const REQEUST_VIDEOS = 'REQEUST_VIDEOS';
export const ADD_VIDEO = 'ADD_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const UPDATE_STATUS = ""


export const updateStatus = (status) => {
    return {
        UPDATE_STATUS,
        status
    }
}

export const uploadVideo = (file, authtoken) => {

    let form = new FormData();
    form.append("video[video]", file);
    form.append("video[name]", file.name);

    fetch("/videos", {
        method: 'POST',
        body: form,
        headers: {
            "X-CSRF-Token": authtoken
        }
    })
        .then(response => {
            if (response.ok) {
                dispatch(updateStatus((<div className="text-success">Uploaded successfully</div>)));
                return response.json()
            } else {
                dispatch(updateStatus((<div className="text-danger">Error uploading.</div>)));
                let error = response.status;
                console.log("An error occured: ", error);
                return null
            }
        }, error => console.log("rejected promise error: ", error))
        .then(json => {
            if( json != null ) {
                console.log("Successfuly uploaded")
            }
        })
}
