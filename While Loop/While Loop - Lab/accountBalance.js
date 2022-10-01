function accountBalance(input) {
    let i = 0;
    let command = input[i];
    i++;
    let sum = 0;
    while (command !== "NoMoreMoney") {    
      let money = Number(command);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }       
        console.log(`Increase: ${money.toFixed(2)}`);
        sum += money;
        command = input[i];
        i++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["120","45.55","-150"]);
