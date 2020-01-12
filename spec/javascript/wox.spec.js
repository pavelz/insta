import React from 'react'
import sinon from 'sinon'
import Button from 'Button'
import {mount, render, shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import pretty from "pretty"

test('expect button to match the snapshot' ,() => {
    let spy = sinon.spy();
    let pret = mount(<Button change={spy} />);

    console.log(pret.find(".custom-file").childAt(0).html());
    pret.find(".custom-file-input").first().simulate('change', {target: {name: 'value', value: 'hey!'}});
    expect(spy.calledOnce).toBe(true);

    expect(pret.find(".custom-file").childAt(0).props().type).toEqual("file");
});

test('expect regular button to be a button', () => {
    let spy = sinon.spy();
    let pret = mount(<Button type="button"/>);
    console.log(pret.find(".btn-primary"));
});
