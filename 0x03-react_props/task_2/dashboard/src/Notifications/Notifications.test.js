import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders a <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <Notifications /> component and checks for 3 NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders a <Notifications /> component and verifies html text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });

  it('renders and checks html of NotificationItem component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});