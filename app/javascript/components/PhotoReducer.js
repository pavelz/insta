import {
  FETCH_PHOTOS,
  RECEIVE_PHOTOS,
  REQUEST_PHOTOS
} from './PhotoActions'

// Reducers for reading store / Photo model
const reducer = (state, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return Object.assign({}, state, {
        isLoading: true
      })
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, {
        isLoading: false,
        photo
      })
  }
}

export default reducer
