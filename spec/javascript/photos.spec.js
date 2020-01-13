import React from 'react'
import sinon from 'sinon'
import Photos from 'Photos'
import { Provider } from 'react-redux'

import {mount, render, shallow} from 'enzyme'
import {applyMiddleware, compose, createStore} from "redux";
import PhotoReducer from "../../app/javascript/components/PhotoReducer";
import thunkMiddleware from "redux-thunk";

describe("Photos component", () => {
    it('should load photos from the server', () => {
        let store = createStore(
            PhotoReducer,
            {photos: []}, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f));
        let photos = mount(<Provider store={store}><Photos/></Provider>);
        expect(photos.find(".pagination")).toBeDefined();
    });
});
