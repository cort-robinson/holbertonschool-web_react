interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'New York',
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    location: 'New York',
}

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = table.createTBody();


studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tableBody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const lastNameCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.innerText = student.firstName;
    lastNameCell.innerText = student.lastName;
})

document.body.appendChild(table);
