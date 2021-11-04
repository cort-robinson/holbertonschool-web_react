import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders a <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
  })

  it('renders a <Notifications /> component and checks for three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications li')).toHaveLength(3);
  })

  it('renders a <Notifications /> component and verifies html text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  })
});
