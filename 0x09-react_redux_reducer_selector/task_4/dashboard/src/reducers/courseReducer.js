import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';

const initialState = Map([]);

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const newCourseList = action.data.map((course) => ({
        ...course,
        isSelected: false
      }));
      const normalizedCourseList = coursesNormalizer(newCourseList);
      return state.merge(normalizedCourseList);

    case SELECT_COURSE:
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        true
      );

    case UNSELECT_COURSE:
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        false
      );

    default:
      return state;
  }
}
