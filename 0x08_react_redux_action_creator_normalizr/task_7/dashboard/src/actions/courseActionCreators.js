import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index
  };
}

const boundSelectCourse = (index) => dispatchEvent(selectCourse(index));

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index
  };
}

const boundUnSelectCourse = (index) => dispatchEvent(unSelectCourse(index));

export { selectCourse, unSelectCourse, boundSelectCourse, boundUnSelectCourse };
