import React from 'react'
import sinon from 'sinon'
import Button from 'Button'
import {mount, render, shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import pretty from "pretty"

describe("for Button component", () => {
    test('expect button to match the snapshot', () => {
        let spy = sinon.spy();
        let pret = mount(<Button change={spy}/>);

        pret.find(".custom-file-input").first().simulate('change', {target: {name: 'value', value: 'hey!'}});
        expect(spy.calledOnce).toBe(true);

        expect(pret.find(".custom-file").childAt(0).props().type).toEqual("file");
    });

    test('expect regular button to be a button', () => {
        let spy = sinon.spy();
        let pret = mount(<Button type="button"/>);
        expect(pret.find(".btn-primary")).toBeDefined();
        expect(pret.find(".btn-primary")).toHaveLength(1);
    });

    test('expect submit button to show up', () => {
        let spy = sinon.spy();
        let pret = mount(<Button type="submit"/>)
    });

    test('expect default button to not be friendly at all', () => {
        let pret = mount(<Button type={null}/>);

        expect(pret.find(".text-danger")).toBeDefined();
    });
});
