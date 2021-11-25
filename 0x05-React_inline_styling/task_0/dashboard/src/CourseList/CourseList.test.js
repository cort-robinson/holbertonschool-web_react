import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
	{id: 1, name: 'ES6', credit: 60},
	{id: 2, name: 'Webpack', credit: 20},
	{id: 3, name: 'React', credit: 40},
];

describe('CourseList with listCourses empty', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });

  it('renders CourseList without crashing', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders CourseList correctly with empty array or no array', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.exists()).toBe(true);
    const wrapper2 = shallow(<CourseList listCourses={[]} />);
    expect(wrapper2).toHaveLength(1);
    expect(wrapper2.exists()).toBe(true);
  });
});

describe('CourseList with valid listCourses', () => {
  let wrapper;
	beforeEach(() => {
		wrapper = shallow(<CourseList listCourses={listCourses} />);
	})

  it('renders a CourseList component that has 5 CourseListRow component children', () => {
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
    expect(wrapper.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
    expect(wrapper.find(CourseListRow).get(0).props.isHeader).toEqual(true);

    expect(wrapper.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
    expect(wrapper.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
    expect(wrapper.find(CourseListRow).get(1).props.isHeader).toEqual(true);

    expect(wrapper.find(CourseListRow).get(2).props.textFirstCell).toEqual('ES6');
    expect(wrapper.find(CourseListRow).get(2).props.textSecondCell).toEqual(60);
    expect(wrapper.find(CourseListRow).get(2).props.isHeader).toEqual(false);

    expect(wrapper.find(CourseListRow).get(3).props.textFirstCell).toEqual('Webpack');
    expect(wrapper.find(CourseListRow).get(3).props.textSecondCell).toEqual(20);
    expect(wrapper.find(CourseListRow).get(3).props.isHeader).toEqual(false);

    expect(wrapper.find(CourseListRow).get(4).props.textFirstCell).toEqual('React');
    expect(wrapper.find(CourseListRow).get(4).props.textSecondCell).toEqual(40);
    expect(wrapper.find(CourseListRow).get(4).props.isHeader).toEqual(false);
  });
});
