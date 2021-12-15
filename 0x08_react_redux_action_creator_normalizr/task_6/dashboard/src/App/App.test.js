import { StyleSheetTestUtils } from 'aphrodite';
import { mount, shallow } from 'enzyme';
import React from 'react';
import CourseList from '../CourseList/CourseList';
import App from './App';

StyleSheetTestUtils.suppressStyleInjection();

describe('App', () => {
  it('renders an <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('checks that CourseList component is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('checks absence of Login component and presence of Courselist component when isLoggedIn prop is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { email: 'user@gmail.com', password: 'userPassword', isLoggedIn: true } });
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('checks correct calling of logOut function and that function calls correct alert', () => {
    const events = {};
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();

    const props = {
      isLoggedIn: true,
      logOut: jest.fn(),
    };

    const wrapper = mount(<App {...props} />);
    events.keydown({ ctrlKey: true, key: 'h' });
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(props.logOut).toHaveBeenCalled();
    window.alert.mockRestore();
  });

  it('verifies default state of displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('verifies state of displayDrawer after calling handleDisplayDrawer is true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('verifies state of displayDrawer after calling handleHideDrawer is false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('checks for correct functioning of markNotificationAsRead', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New project available' },
      ]
    });
    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'urgent', value: 'New project available' },
    ]);
  });
});
