import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

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
});
