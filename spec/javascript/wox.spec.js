import React from 'react'
import Button from 'Button'
import renderer from 'react-test-renderer'

test('1 + 1 equals 2', () => {
    const component = renderer.create(<Button name="Untitled" title="Hello"/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});
