function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let spendsDay = 0;
    let totalDay = 0;
    while (availableMoney < needMoney) {
        totalDay++;
        let command = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        if (command === "spend") {
            spendsDay++;
            if (spendsDay === 5) {
                console.log(`You can't save the money.`);
                console.log(totalDay);
                break;
            }
            availableMoney -= money;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
        } else if (command === "save") {
            spendsDay = 0;
            availableMoney += money;
        }
        if (availableMoney >= needMoney) {
            console.log(`You saved the money for ${totalDay} days.`);
        }
    }
}
vacation(["250","150","spend","50","spend","50","save","100","save","100"]);


