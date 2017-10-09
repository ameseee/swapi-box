import React from 'react';
import { shallow, mount } from 'enzyme';
import Scroll from './Scroll';

describe('SCROLL', () => {

  const mockScroll =
        {
          "title": "A New Hope",
          "episode_id": 4,
          "opening_crawl": "A long time ago in a galaxy far, far away",
          "release_date": "1977-05-25"
        };

  const wrapper = shallow(<Scroll scroll={mockScroll}/>);

  it('should render a div with className scroll', () => {
    expect(wrapper.find('.scroll')).toHaveLength(1);
  });

});
