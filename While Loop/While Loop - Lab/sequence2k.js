function sequence2k(input) {
    let number = Number(input[0]);
    let counter = 1;
    while (counter <= number) {
        console.log(counter);
        counter = 2 * counter + 1;
    }
}
sequence2k(["8"]);