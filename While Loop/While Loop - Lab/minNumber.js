function minNumber(input) {
    let i = 0;
    let command = input[i];
    i++;
    let largestNumber = Number.MAX_SAFE_INTEGER;
    while (command !== "Stop") {
        let num = Number(command);
        if (num <= largestNumber) {
            largestNumber = num;
        } 
        command = input[i];
        i++;
    }
    console.log(largestNumber);
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])

