import { Map } from 'immutable';
import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse
} from '../actions/courseActionCreators';
import coursesNormalizer from '../schema/courses';
import courseReducer from './courseReducer';

const courseList = [
  {
    id: 1,
    name: 'ES6',
    credit: 60
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20
  },
  {
    id: 3,
    name: 'React',
    credit: 40
  }
];

describe('courseReducer', () => {
  it('default state returns empty array', () => {
    expect(courseReducer(undefined, {})).toEqual(Map());
  });

  it('FETCH_COURSES_SUCCESS returns data passed', () => {
    expect(courseReducer(undefined, fetchCourseSuccess()).toJS()).toEqual(
      coursesNormalizer(courseList.map((course) => ({ ...course, isSelected: false }))));
  });

  it('SELECT_COURSE returns data with the right item updated', () => {
    const newState = courseReducer(undefined, fetchCourseSuccess());
    expect(courseReducer(newState, selectCourse(2)).toJS()).toEqual(
      coursesNormalizer(courseList.map((course) => ({ ...course, isSelected: course.id === 2 }))));
  });

  it('UNSELECT_COURSE returns data with the right item updated', () => {
    const newState = courseReducer(undefined, fetchCourseSuccess());
    const selectedState = courseReducer(newState, selectCourse(2));
    expect(courseReducer(selectedState, unSelectCourse(2)).toJS()).toEqual(
      coursesNormalizer(courseList.map((course) => ({ ...course, isSelected: false }))));
  })
});
