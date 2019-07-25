import React from 'react'
import Button from 'Button'
import renderer from 'react-test-renderer'

test('expect button to match the snapshot' ,() => {
    const component = renderer.create(<Button name="Untitled" title="Hello"/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});
