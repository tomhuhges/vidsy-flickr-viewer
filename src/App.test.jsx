import React from 'react';
import { mount } from 'enzyme';
import App from './App';

test('App renders a SearchBar', () => {
  const wrapper = mount(
    <App />,
  );
  expect(wrapper.find('SearchBar')).length === 1;
});

test('App renders a Gallery', () => {
  const wrapper = mount(
    <App />,
  );
  expect(wrapper.find('Gallery')).length === 1;
});
