import { css, StyleSheet } from 'aphrodite';
import PropTypes from 'prop-types';
import React from 'react';

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRowStyle: {
    backgroundColor: '#deb5b545',
  },
  headerLeftAlignStyle: {
    textAlign: 'left',
  },
  thStyle: {
    borderBottom: '2px solid rgba(128, 128, 128, 0.3)',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr className={isHeader ? css(styles.headerRowStyle) : css(styles.rowStyle)}>
      {isHeader && textSecondCell === null && (
        <th colSpan={2} className={css(styles.thStyle)}>{textFirstCell}</th>
      )}
      {isHeader && textSecondCell !== null && (
        <>
          <th className={css(styles.headerLeftAlignStyle, styles.thStyle)}>{textFirstCell}</th>
          <th className={css(styles.headerLeftAlignStyle, styles.thStyle)}>{textSecondCell}</th>
        </>
      )}
      {!isHeader && (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
