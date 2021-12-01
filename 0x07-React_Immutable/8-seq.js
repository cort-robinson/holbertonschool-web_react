import { Seq } from 'immutable';

function printBestStudents(object) {
  Seq(object)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      score: student.score,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .forEach((name) => console.log(name));
}

export default printBestStudents;
