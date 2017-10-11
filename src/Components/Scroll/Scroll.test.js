import React from 'react';
import { shallow, mount } from 'enzyme';
import Scroll from './Scroll';

describe('<Scroll/>', () => {

  const mockScroll = [
    ["A New Hope", "It is a period of civil war. Rebel spaceships, st…er people and restore freedom to the galaxy....", "1977-05-25"],
    ["Attack of the Clones", "There is unrest in the Galactic Senate.", "2002-05-16"],
    ["The Phantom Menace", "Turmoil has engulfed the Galactic Republic. The t…ustice in the galaxy, to settle the conflict....", "1999-05-19"],
    ["Revenge of the Sith", "War! The Republic is crumbling under attacks by t…ate mission to rescue the captive Chancellor....", "2005-05-19"],
    ["Return of the Jedi", "Luke Skywalker has returned to his home planet of… struggling to restore freedom to the galaxy...", "1983-05-25"],
    ["The Empire Strikes Back", "It is a dark time for the Rebellion. Although the… remote probes into the far reaches of space....", "1980-05-17"],
    ["The Force Awakens", "Luke Skywalker has vanished. In his absence, the has discovered a clue to Luke's whereabouts....", "2015-12-11"]
  ];

  const wrapper = shallow(<Scroll scrollData={mockScroll}/>);

  it('should render a div with className scroll', () => {
    expect(wrapper.find('.scroll')).toHaveLength(1);
  });

});
