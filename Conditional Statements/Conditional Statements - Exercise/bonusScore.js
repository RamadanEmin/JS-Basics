function bonusScore(input) {
    let point = Number(input[0]);
    let bonus = 0.0;
    if (point <= 100) {
        bonus = 5;
    } else if (point <= 1000) {
        bonus = point * 0.20;
    } else{
        bonus = point * 0.10;
    }
    if (point % 2 == 0){
        bonus += 1;
    } else if (point % 10 == 5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(point + bonus);
}
bonusScore([15875]);
