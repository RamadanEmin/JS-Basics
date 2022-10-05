function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = "";
    for (let i = firstNum; i <= secondNum; i++) {
        let currentNumber = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j <= currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}
equalSumsEvenOddPosition(["100000", "100050"]);
