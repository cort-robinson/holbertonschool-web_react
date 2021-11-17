import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a CourseList component that has 5 CourseListRow component children', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
    expect(wrapper.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
    expect(wrapper.find(CourseListRow).get(0).props.isHeader).toEqual(true);

    expect(wrapper.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
    expect(wrapper.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
    expect(wrapper.find(CourseListRow).get(1).props.isHeader).toEqual(true);

    expect(wrapper.find(CourseListRow).get(2).props.textFirstCell).toEqual('ES6');
    expect(wrapper.find(CourseListRow).get(2).props.textSecondCell).toEqual('60');
    expect(wrapper.find(CourseListRow).get(2).props.isHeader).toEqual(false);

    expect(wrapper.find(CourseListRow).get(3).props.textFirstCell).toEqual('Webpack');
    expect(wrapper.find(CourseListRow).get(3).props.textSecondCell).toEqual('20');
    expect(wrapper.find(CourseListRow).get(3).props.isHeader).toEqual(false);

    expect(wrapper.find(CourseListRow).get(4).props.textFirstCell).toEqual('React');
    expect(wrapper.find(CourseListRow).get(4).props.textSecondCell).toEqual('40');
    expect(wrapper.find(CourseListRow).get(4).props.isHeader).toEqual(false);
  });
});
