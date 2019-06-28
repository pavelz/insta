import fetch from "cross-fetch"
import {createStore} from 'redux'

function photos(state, action){
  switch(action){
    case "index":
      fetch("/photos.json")
        .then(response => response.json())
        .then(json => self.state.photos = json)
  }
}

export default photos

