import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

StyleSheetTestUtils.suppressStyleInjection();

const htmlObj = {
  __html: getLatestNotification(),
};
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: htmlObj },
];

describe('<Notifications />', () => {
  it('renders a <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <Notifications /> component and checks for 3 NotificationItem components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders a <Notifications /> component and verifies html text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });

  it('renders and checks html of NotificationItem component', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toContain('data-notification-type="default">New course available</li>');
  });

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('div.Notifications is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('menu item is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('div.Notifications is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('renders CourseList correctly with empty or missing array', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    const wrapperMissing = shallow(<Notifications displayDrawer={true} />);
    expect(wrapperMissing.find('.Notifications')).toHaveLength(1);
  });

  it('renders NotificationItem components when passed listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders correct message when listNotifications is empty or missing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).not.toEqual('Here is the list of notifications');
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });

  it('console.log is called correctly when markAsRead is called', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const spy = jest.spyOn(console, 'log');
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });

  it('does not rerender when updating props with same list', () => {
    const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications });
    expect(spy).toHaveReturnedWith(false);
    spy.mockRestore();
  });

  it('rerenders when updating props with longer list', () => {
    const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications: [...listNotifications, { id: 4, type: 'default', value: 'New course available' }] });
    expect(spy).toHaveReturnedWith(true);
    spy.mockRestore();
  });

  it('calls handleDisplayDrawer when clicking on menu item', () => {
    const mockHandleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleDisplayDrawer={mockHandleDisplayDrawer} />);
    const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');
    wrapper.find('.menuItem').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('calls handleHideDrawer when clicking on close button', () => {
    const mockHandleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleHideDrawer={mockHandleHideDrawer} />);
    const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
    wrapper.find('.Notifications button').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
