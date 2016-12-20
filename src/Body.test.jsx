import React from 'react';
import renderer from 'react-test-renderer';
import Body from './Body';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Body body="foo" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
