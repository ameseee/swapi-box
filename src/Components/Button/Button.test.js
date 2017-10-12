import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import config from '../../config';

describe(`Button`, () => {
  let wrapper, button, buttonText;
  const mockFunction = jest.fn();

  beforeEach( () => {
    wrapper = shallow(
      <Button
        buttonText='Button Text'
        buttonClass='button-class'
        buttonCallback={mockFunction} />
    );
    button = wrapper.find('button');
    buttonText = button.text();
  });

  it('Can be created', () => {
    expect(wrapper.exists()).toEqual(true);
  });


});
