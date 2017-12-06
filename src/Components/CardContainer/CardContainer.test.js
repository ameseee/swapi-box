import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import config from '../../setupTests.js';

describe('<CardContainer />', () => {
  let wrapper = shallow(<CardContainer
    vehicles={{1: 'car', 2: 'truck'}}
    planets={{1: 'pluto', 2: 'earth'}}
    people={{1: 'Luke', 2: 'Leia'}}
    selected={'people'}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
