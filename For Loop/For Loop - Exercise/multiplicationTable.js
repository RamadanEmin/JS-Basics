function multiplicationTable(input) {
    let number = Number(input[0]);
    let multiplication = 1;
    for (let i = 1; i <= 10; i++) {
        multiplication = number * i;
        console.log(`${i} * ${number} = ${multiplication}`);
    }
}
multiplicationTable(["5"]);