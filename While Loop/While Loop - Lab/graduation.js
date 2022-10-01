function graduation(input) {
    let i = 0;
    let name = input[i];
    i++;
    let gradeSum = 0;
    let badGrade = 0;
    let classAtSchool = 1;
    let isExcluded = false;
    while (classAtSchool <= 12) {
        let grade = Number(input[i]);
        i++
        if (grade < 4.00) {
            badGrade++;
            if (badGrade > 1) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${classAtSchool} grade`);
                break;
            }
            continue;
        }
        gradeSum += grade;
        classAtSchool++;
    }
    if (!isExcluded) {
let AverageGrade = gradeSum / 12;
console.log(`${name} graduated. Average grade: ${AverageGrade.toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
