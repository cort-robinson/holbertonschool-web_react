import React from "react";
import { shallow, mount } from "enzyme";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

describe('NotificationItem', () => {
  it('renders a NotificationItem component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders component with type and value properties', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props()['data-notification-type']).toEqual('default');
    expect(wrapper.text()).toEqual('test');
    expect(wrapper.html()).toContain('<li data-notification-type="default"');
    expect(wrapper.html()).toContain('test</li>');
  });

  it('calls spy markAsRead property with correct id when component is clicked', () => {
    const listNotifications = [
      { id: 1, type: "default", value: "test1" },
      { id: 2, type: "urgent", value: "test2" },
      { id: 3, type: "default", value: "test3" },
    ];
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'markAsRead');
    wrapper.find('li').first().simulate('click');
    expect(spy).toHaveBeenCalledWith(1);
    wrapper.find('li').at(1).simulate('click');
    expect(spy).toHaveBeenCalledWith(2);
    wrapper.find('li').last().simulate('click');
    expect(spy).toHaveBeenCalledWith(3);
  });
});
