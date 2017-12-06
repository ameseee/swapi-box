import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import config from '../../setupTests.js';

describe('<Button />', () => {
  let wrapper = shallow(<Button />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a button', () => {
    const btn = wrapper.find('button');

    expect(btn.length).toEqual(1);
  });

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
