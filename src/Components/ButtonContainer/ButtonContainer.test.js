import React from 'react';
import ButtonContainer from './ButtonContainer';
import { shallow } from 'enzyme';

describe('<ButtonContainer />', () => {
  let wrapper = shallow(<ButtonContainer />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div', () => {
    const div = wrapper.find('.button-container');

    expect(div.length).toEqual(1);
  });

  it('should match the Card snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

});
