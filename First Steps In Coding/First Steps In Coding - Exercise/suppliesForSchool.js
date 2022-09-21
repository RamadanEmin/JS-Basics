function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);
    let money = pens * 5.80 + markers * 7.20 + liters * 1.20; 
    let neededMoney = money - (money * discount) / 100;
    console.log(neededMoney);
}
suppliesForSchool(["4","2","5","13"]);