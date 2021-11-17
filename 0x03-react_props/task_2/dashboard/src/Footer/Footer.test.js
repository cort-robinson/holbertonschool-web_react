import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders a Footer component without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Footer component with text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div.App-footer p').text()).toContain('Copyright');
  })
})
