import React from 'react';
import { mount } from 'enzyme';
import App from './';

test('App renders a SearchBar', () => {
  const wrapper = mount(
    <App />,
  );
  expect(wrapper.find('SearchBar')).to.have.length(1);
});

test('App renders a Gallery', () => {
  const wrapper = mount(
    <App />,
  );
  expect(wrapper.find('Gallery')).to.have.length(1);
});
