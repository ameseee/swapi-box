import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import config from '../../setupTests.js';

describe('<Button />', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<Button />);

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
