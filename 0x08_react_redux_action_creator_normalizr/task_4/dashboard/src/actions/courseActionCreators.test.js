import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('Actions', () => {
  it('selectCourse returns properly', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  })

  it('unSelectCourse returns properly', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  })
})
