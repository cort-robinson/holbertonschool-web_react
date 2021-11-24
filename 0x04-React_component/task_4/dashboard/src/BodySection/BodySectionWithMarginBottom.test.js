import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).props().title).toEqual('test title');
    expect(wrapper.find(BodySection).props().children).toEqual(<p>test children node</p>);
  });
});
