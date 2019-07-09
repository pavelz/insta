import {
  FETCH_PHOTOS,
  RECEIVE_PHOTOS,
  REQUEST_PHOTOS,
    ADD_PHOTO,
    DELETE_PHOTO
} from './PhotoActions'

// Reducers for reading store / Photo model

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return Object.assign({}, state, {
        isLoading: true
      })

    case RECEIVE_PHOTOS:
      return Object.assign({}, state, {
        isLoading: false,
        photos: action.photos
      })
    case ADD_PHOTO:
      return Object.assign({}, state, {
        added: action.photos
      })
    default:
      return state
  }

}

export default reducer
