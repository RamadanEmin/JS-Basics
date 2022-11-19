function aluminumJoinery(input = []) {
    const joinery = Number(input.shift());
    const size = input.shift();
    const delivery = input.shift();
    let totalSum = 0;
    if (joinery < 10) {
        return "Invalid order";
    }
    switch (size) {
        case '90X130':
            if (30 >= joinery) {
                totalSum = joinery * 110;
            } else if (30 < joinery && joinery <= 60) {
                totalSum = joinery * 110 * 0.95;
            } else if (joinery > 60) {
                totalSum = joinery * 110 * 0.92;
            }
            break;
        case '100X150':
            if (40 >= joinery) {
                totalSum = joinery * 140;
            } else if (40 < joinery && joinery <= 80) {
                totalSum = joinery * 140 * 0.94;
            } else if (joinery > 80) {
                totalSum = joinery * 140 * 0.90;
            }
            break;
        case '130X180':
            if (20 >= joinery) {
                totalSum = joinery * 190;
            } else if (20 < joinery && joinery <= 50) {
                totalSum = joinery * 190 * 0.93;
            } else if (joinery > 50) {
                totalSum = joinery * 190 * 0.88;
            }
            break;
        case '200X300':
            if (25 >= joinery) {
                totalSum = joinery * 250;
            } else if (25 < joinery && joinery <= 50) {
                totalSum = joinery * 250 * 0.91;
            } else if (joinery > 50) {
                totalSum = joinery * 250 * 0.86;
            }
            break;
    }
    if (delivery === 'With delivery') {
        totalSum += 60;
    }
    if (joinery > 99) {
        totalSum *= 0.96;
    }
    return `${totalSum.toFixed(2)} BGN`;
}
console.log(aluminumJoinery(([
    '105',
    '100X150',
    'With delivery'])));