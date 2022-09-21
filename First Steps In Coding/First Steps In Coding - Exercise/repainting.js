function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursOfWork = Number(input[3]);
    let neededNylon = (nylon + 2) * 1.50;
    let neededPaint = (paint + paint * 0.10) * 14.50;
    let materials = neededNylon + neededPaint + thinner * 5 + 0.40;
    let expense = materials + (materials * 0.30) * hoursOfWork;
    console.log(expense);
}
repainting(["10","11","4","8"]);