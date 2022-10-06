function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index++]);
    let command = input[index++];
    let average = 0;
    let counter = 0;
    let sumGrades = 0;
    while (command !== "Finish") {     
        let sumGrade = 0;
        for (let i = 0; i < jury; i++) {
            let grade = Number(input[index]);
            index++;
            sumGrade += grade;
            counter++;
        }
        average = sumGrade / jury;
        console.log(`${command} - ${average.toFixed(2)}.`);
        sumGrades += sumGrade;
        command = input[index++];
    }
    console.log(`Student's final assessment is ${(sumGrades / counter).toFixed(2)}.`);
}
trainTheTrainers(["2","Objects and Classes","5.77","4.23","Dictionaries","4.62","5.02","RegEx","2.88","3.42","Finish"]);


