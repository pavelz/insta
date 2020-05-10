import fetch from "cross-fetch"

export const FETCH_PHOTOS = 'FETCH_PHOTOS'
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const REQUEST_PHOTOS = 'REQEUST_PHOTOS'
export const ADD_PHOTO = 'ADD_PHOTO'
export const DELETE_PHOTO = 'DELETE_PHOTO'


export const receivePhotos = (photos) => {
  return {
    type: RECEIVE_PHOTOS,
    photos
  }
}

export const requestPhotos = (user) => {
  return {
    type: REQUEST_PHOTOS,
    user
  }
}

export const fetchPhotos = (user) => {
  return dispatch => {
      fetch("/photos.json")
        .then(response => response.json())
        .then(json => dispatch(receivePhotos(json)))
  }
}
export const deleteLocalPhoto = (photo) =>{
  return {
    type: DELETE_PHOTO,
    photo
  }
}

export const deletePhoto = (photo) => {
  return dispatch => {
    let token  = $('meta[name="csrf-token"]').prop('content');
    console.log("%c"+token, "color: red");
    fetch("/photos/" + photo.id , {method: "DELETE", headers: {'X-CSRF-Token': token}})
        .then(response => response)
        .then(json => dispatch(deleteLocalPhoto(photo)))
  }
}
export const addPhoto = (photo) => {
  // something about photo upload , visual component. etc.
}
export const fetchPhotosIfNeeded = () => {
  return (dispatch, getState) => {
    photos = getState()
  }
}
