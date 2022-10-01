function maxNumber(input) {
    let i = 0;
    let command = input[i];
    i++;
    let largestNumber = Number.MIN_SAFE_INTEGER;
    while (command !== "Stop") {
        let num = Number(command);
        if (num >= largestNumber) {
            largestNumber = num;
        } 
        command = input[i];
        i++;
    }
    console.log(largestNumber);
}
maxNumber(["-1",
"-2",
"Stop"])




