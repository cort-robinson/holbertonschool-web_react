import { mount, shallow } from 'enzyme';
import React from 'react';
import { AppContext } from '../App/AppContext';
import Footer from './Footer';

describe('Footer', () => {
  it('renders a Footer component without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Footer component with text "Copyright"', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('div.App-footer p').text()).toContain('Copyright');
  });

  it('does not display contact link when user si logged out', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('div.App-footer p').length).toBe(1);
  });

  it('displays contact link when user is logged in', () => {
    const value = { user: { email: 'user@gmail.com', password: 'userPassword', isLoggedIn: true } };
    const wrapper = mount(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(wrapper.find('div.App-footer a').text()).toContain('Contact Us');
  });
});
