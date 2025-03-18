// problem 1
const studentDataBase: string[] = ['olusegun', 'chibuzor', 'ebun', 'kingsley', 'tobiloba']

function studentFinder(allstudents: string[], studentName: string): void {
    for (let i = 0; i < allstudents.length; i++) {
        if (allstudents[i] === studentName) {
            console.log(`Found ${studentName}`)
        }
    }
}

studentFinder(studentDataBase, 'chibuzor')