"use strict";
// problem 1
const studentDataBase = ['olusegun', 'chibuzor', 'ebun', 'kingsley', 'tobiloba'];
function studentFinder(allstudents, studentName) {
    for (let i = 0; i < allstudents.length; i++) {
        if (allstudents[i] === studentName) {
            console.log(`Found ${studentName}`);
        }
    }
}
studentFinder(studentDataBase, 'chibuzor');
