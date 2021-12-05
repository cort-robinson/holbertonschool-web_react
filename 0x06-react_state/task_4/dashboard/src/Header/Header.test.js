import { StyleSheetTestUtils } from 'aphrodite';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Header from './Header';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header', () => {
  it('renders a Header component without crashing', () => {
    const wrapper = shallow(<AppContext.Provider><Header /></AppContext.Provider>);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Header component with img and h1 tags', () => {
    const value = { user: { email: '', password: '', isLoggedIn: false }, logOut: () => { } };
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('does not create logoutSection with default context value', () => {
    const value = { user: { email: '', password: '', isLoggedIn: false }, logOut: () => { } };
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('creates logoutSection with user defined context value', () => {
    const value = { user: { email: 'user@gmail.com', password: 'userPassword', isLoggedIn: true }, logOut: () => { } };
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls logOut spy when logoutSection a element is clicked', () => {
    const value = { user: { email: 'user@gmail.com', password: 'userPassword', isLoggedIn: true }, logOut: () => { } };
    const spy = jest.spyOn(value, 'logOut');
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    wrapper.find('#logoutSection a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
