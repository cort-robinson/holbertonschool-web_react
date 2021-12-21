import { StyleSheetTestUtils } from 'aphrodite';
import { mount, shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

StyleSheetTestUtils.suppressStyleInjection();

describe('NotificationItem', () => {
  it('renders a NotificationItem component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders component with type and value properties', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props()['data-notification-type']).toEqual('default');
    expect(wrapper.text()).toEqual('test');
    expect(wrapper.html()).toContain('data-notification-type="default"');
    expect(wrapper.html()).toContain('test</li>');
  });

  it('calls spy markNotificationAsRead property with correct id when component is clicked', () => {
    const listNotifications = [
      { id: 1, type: "default", value: "test1" },
      { id: 2, type: "urgent", value: "test2" },
      { id: 3, type: "default", value: "test3" },
    ];
    const mockMarkNotificationAsRead = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={mockMarkNotificationAsRead} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance.props, 'markNotificationAsRead');
    wrapper.find('li').first().simulate('click');
    expect(spy).toHaveBeenCalledWith(1);
    wrapper.find('li').at(1).simulate('click');
    expect(spy).toHaveBeenCalledWith(2);
    wrapper.find('li').last().simulate('click');
    expect(spy).toHaveBeenCalledWith(3);
  });
});
