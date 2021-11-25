import { StyleSheetTestUtils } from 'aphrodite';
import { mount } from 'enzyme';
import React from 'react';
import Login from '../Login/Login';
import WithLogging from './WithLogging';

StyleSheetTestUtils.suppressStyleInjection();

describe('WithLogging HOC', () => {
  it('outputs to console when mounting and unmounting pure html', () => {
    const spy = jest.spyOn(console, 'log');
    const Component = WithLogging(() => <p />);
    const wrapper = mount(<Component />);
    expect(spy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
    spy.mockRestore();
  });

  it('outputs to console when mounting and unmounting Login component', () => {
    const spy = jest.spyOn(console, 'log');
    const Component = WithLogging(Login);
    const wrapper = mount(<Component />);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
    spy.mockRestore();
  })
});
