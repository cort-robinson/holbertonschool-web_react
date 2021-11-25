import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  courseList: {
    width: '90%',
    margin: '2.5em',
    border: '1px solid rgba(128, 128, 128, .3)',
  }
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
