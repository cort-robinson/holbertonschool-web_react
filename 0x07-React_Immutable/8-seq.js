import { Seq } from 'immutable';

function printBestStudents(object) {
  Seq(object)
    .filter(student => student.score < 70)
    .map(student => `${student.firstName} ${student.lastName}`)
    .forEach(name => console.log(name));
}

export default printBestStudents;
