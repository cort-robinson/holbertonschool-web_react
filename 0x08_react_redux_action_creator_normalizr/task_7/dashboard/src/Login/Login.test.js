import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

StyleSheetTestUtils.suppressStyleInjection();

describe('Login', () => {
  it('renders a Login component without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a Login component with 3 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('sets submit button to disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find({ type: 'submit' }).prop('disabled')).toBe(true);
  });

  it('sets submit button to enabled after changing value of two inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({ type: 'email' }).simulate('change', { target: { value: 'test' } });
    wrapper.find({ type: 'password' }).simulate('change', { target: { value: 'test' } });
    expect(wrapper.find({ type: 'submit' }).prop('disabled')).toBe(false);
  });
});
