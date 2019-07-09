import fetch from "cross-fetch"
import {createStore} from 'redux'
export const FETCH_PHOTOS = 'FETCH_PHOTOS'
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const REQEUST_PHOTOS = 'REQEUST_PHOTOS'
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
      console.log('called fetch dispatch')
      fetch("/photos.json")
        .then(response => response.json())
        .then(json => dispatch(receivePhotos(json)))
  }
}

export const fetchPhotosIfNeeded = () => {
  return (dispatch, getState) => {
    photos = getState()
  }
}
