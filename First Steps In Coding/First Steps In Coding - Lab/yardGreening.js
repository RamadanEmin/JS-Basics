function yardGreening(input) {
    let space = Number(input[0]);
    let greening = space * 7.61;
    let discount = greening * 0.18;
    console.log(`The final price is: ${greening - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"]);