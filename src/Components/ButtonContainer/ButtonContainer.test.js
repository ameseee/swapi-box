import React from 'react';
import ButtonContainer from './ButtonContainer';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import config from '../../setupTests.js';

describe('<ButtonContainer />', () => {
  const mkFun = jest.fn();
  let wrapper = shallow(<ButtonContainer />);

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
