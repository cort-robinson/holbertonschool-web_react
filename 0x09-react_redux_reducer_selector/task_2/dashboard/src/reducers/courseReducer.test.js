import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';
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
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('FETCH_COURSES_SUCCESS returns data passed', () => {
    expect(courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courseList })).toEqual(courseList.map((course) => ({ ...course, isSelected: false })));
  });

  it('SELECT_COURSE returns data with the right item updated', () => {
    const newState = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courseList });
    expect(courseReducer(newState, { type: SELECT_COURSE, index: 2 })).toEqual(newState.map((course) => {
      if (course.id === 2) {
        return {
          ...course,
          isSelected: true
        };
      }
      return course;
    }));
  });

  it('UNSELECT_COURSE returns data with the right item updated', () => {
    const newState = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data: courseList });
    expect(courseReducer(newState, { type: UNSELECT_COURSE, index: 2 })).toEqual(newState.map((course) => {
      if (course.id === 2) {
        return {
          ...course,
          isSelected: false
        };
      }
      return course;
    }));
  });
});
