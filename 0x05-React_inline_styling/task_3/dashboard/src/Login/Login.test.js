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

  it('renders a Login component with 2 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
