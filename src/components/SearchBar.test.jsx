import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';

test('SearchBar renders an input', () => {
  const wrapper = mount(
    <SearchBar />,
  );
  const input = wrapper.find('input');
  expect(input.is('input')).toBe(true);
});

test('SearchBar renders a button', () => {
  const wrapper = mount(
    <SearchBar />,
  );
  const button = wrapper.find('button');
  expect(button.is('button')).toBe(true);
});

test('SearchBar input runs handleSearch on keyup', () => {
  const handleSearch = jest.fn();
  const wrapper = mount(
    <SearchBar handleSearch={handleSearch} />,
  );
  wrapper.find('input').simulate('keyup');
  expect(handleSearch).toBeCalled();
});

test('SearchBar input runs handleSearch on click', () => {
  const handleSearch = jest.fn();
  const wrapper = mount(
    <SearchBar handleSearch={handleSearch} />,
  );
  wrapper.find('button').simulate('click');
  expect(handleSearch).toBeCalled();
});
