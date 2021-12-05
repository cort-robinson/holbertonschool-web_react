import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header', () => {
  it('renders a Header component without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Header component with img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
