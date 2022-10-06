function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index++];
    let primeSum = 0;
    let nonPrimeSum = 0;
    while (command !== "stop") {
        let num = Number(command);
        command = input[index];
        index++;
        if (num < 0) {
            console.log("Number is negative.");
            continue;
        } else {
            let counter = 0;
            for (let j = 1; j <= num; j++) {
                if (num % j === 0) {
                    counter++;
                }
            }
                if (counter === 2) {
                    primeSum += num;               
                } else if (counter > 2) {
                    nonPrimeSum += num;
                }           
        }
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["3","9","0","7","19","4","stop"]);


