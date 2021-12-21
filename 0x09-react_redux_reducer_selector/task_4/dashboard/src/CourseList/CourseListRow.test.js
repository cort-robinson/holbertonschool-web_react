import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';

StyleSheetTestUtils.suppressStyleInjection();

describe('CourseListRow', () => {
  it('renders correctly with isHeader set to true and textSecondCell equal to null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell text" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').get(0).props.colSpan).toEqual(2);
    expect(wrapper.find('th').get(0).props.children).toEqual('First cell text');
  });

  it('renders correctly with isHeader set to true and textSecondCell present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell text" textSecondCell="Second cell text" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').get(0).props.children).toEqual('First cell text');
    expect(wrapper.find('th').get(1).props.children).toEqual('Second cell text');
  });

it('renders correctly with isHeader set to false', () => {
  const wrapper = shallow(<CourseListRow textFirstCell="First cell text" />);
  expect(wrapper.find('tr td')).toHaveLength(2);
});
});
