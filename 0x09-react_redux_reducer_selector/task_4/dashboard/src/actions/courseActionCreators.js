import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from './courseActionTypes';

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

const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index
  };
};

const boundSelectCourse = (index) => dispatchEvent(selectCourse(index));

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index
  };
};

const boundUnSelectCourse = (index) => dispatchEvent(unSelectCourse(index));

const fetchCourseSuccess = () => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: courseList
  };
};

export {
  selectCourse,
  unSelectCourse,
  boundSelectCourse,
  boundUnSelectCourse,
  fetchCourseSuccess
};
