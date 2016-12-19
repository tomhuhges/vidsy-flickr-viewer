import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

test('SearchBar renders an input with className of `search`', () => {
  const wrapper = shallow(
    <SearchBar />,
  );
  const input = wrapper.find('.search');
  expect(input.is('input')).toBe(true);
});

test('SearchBar renders a button with className of `btn`', () => {
  const wrapper = shallow(
    <SearchBar />,
  );
  const button = wrapper.find('.btn');
  expect(button.is('button')).toBe(true);
});

test('SearchBar input runs handleSearch on keyup', () => {
  const handleSearch = jest.fn();
  const wrapper = shallow(
    <SearchBar handleSearch={handleSearch} />,
  );
  wrapper.find('input').simulate('keyup');
  expect(handleSearch).toBeCalled();
});

test('SearchBar input runs handleSearch on click', () => {
  const handleSearch = jest.fn();
  const wrapper = shallow(
    <SearchBar handleSearch={handleSearch} />,
  );
  wrapper.find('button').simulate('click');
  expect(handleSearch).toBeCalled();
});
