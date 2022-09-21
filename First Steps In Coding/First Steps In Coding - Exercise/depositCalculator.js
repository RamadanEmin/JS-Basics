function depositCalculator(input) {
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let percent = Number(input[2]);
    let sum = deposit + period * ((deposit * (percent / 100)) / 12);
    console.log(sum);
}
depositCalculator(["200","3","5.7"]);