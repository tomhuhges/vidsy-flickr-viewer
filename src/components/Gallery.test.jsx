import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

test('Gallery renders a div with className of `img`', () => {
  const images = [{
    farm: 1,
    id: 1,
    secret: 1,
    server: 1,
  }];
  const wrapper = shallow(
    <Gallery images={images} />,
  );
  const div = wrapper.find('.img');
  expect(div.is('div')).toBe(true);
});

test('Gallery renders one div for each object of the images array', () => {
  const images = [{
    farm: 1,
    id: 1,
    secret: 1,
    server: 1,
  },
  {
    farm: 1,
    id: 1,
    secret: 1,
    server: 1,
  }];
  const wrapper = shallow(
    <Gallery images={images} />,
  );
  expect(wrapper.find('div')).length === 2;
});
