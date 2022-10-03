function examPreparation(input) {
    let index = 0;
    let badGrade = Number(input[index]);
    index++;
    let goodGradeCounter = 0;
    let badGradeCounter = 0;
    let sum = 0;
    let lastTask = "";

    while (badGradeCounter < badGrade) {
        let taskName = input[index];
        index++;
        if (taskName === "Enough") {
            console.log(`Average score: ${(sum / (goodGradeCounter + badGradeCounter)).toFixed(2)}`);
            console.log(`Number of problems: ${(goodGradeCounter + badGradeCounter)}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }
        let grade = Number(input[index]);
        index++;
        sum += grade;      
        if (grade <= 4) {
            badGradeCounter++;
            if (badGradeCounter === badGrade) {
                console.log(`You need a break, ${badGradeCounter} poor grades.`);
                break;
            }
            continue;
        }
        goodGradeCounter++;
        lastTask = taskName;
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
