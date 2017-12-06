import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import config from '../../setupTests.js';

describe('CARD', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<Card />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a containing div', () => {
    const div = wrapper.find('div');

    expect(div.length).toEqual(1);
  });

  it('should render a card article', () => {
    const div = wrapper.find('.card');

    expect(div.length).toEqual(1);
  });


  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
