import {
  RECEIVE_PHOTOS,
  REQUEST_PHOTOS,
  ADD_PHOTO,
  DELETE_PHOTO
} from './PhotoActions'

// Reducers for reading store / Photo model
const reducer = (state = {}, action) => {
  console.log(action.type)
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
        photos: state.photos != null ? state.photos.concat([action.photo]) : [action.photo]
      })
    case DELETE_PHOTO:
      console.log("DELETE REDUCE")
      return Object.assign({},state, {
        photos: state.photos.filter(photo => photo.id != action.photo.id)
      })
    default:
      return state
  }
}

export default reducer
