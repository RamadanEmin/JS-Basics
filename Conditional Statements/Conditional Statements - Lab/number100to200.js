function numbers(input) {
    let nums = Number(input[0]);
    if (nums < 100) {
        console.log("Less than 100");
    } else if (nums <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}
numbers(["1300"]);