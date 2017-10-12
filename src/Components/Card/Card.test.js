import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import config from '../../setupTests.js';

describe('CARD', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<Card />);

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
