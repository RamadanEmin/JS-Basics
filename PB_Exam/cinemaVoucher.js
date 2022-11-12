function cinemaVoucher(input) {
    let index = 0;
    let voucherValue = Number(input[index++]);
    let command = input[index++];
    let price = 0;
    let counter = 0;
    let otherCounter = 0;
    while (command !== "End") {
        let purchase = "" + command;    
        if (purchase.length > 8) {
            
            price += Number(purchase.charCodeAt(0)) + Number(purchase.charCodeAt(1));
            if (price > voucherValue) {
                break;
            }
            counter++;
        } else {  
            price += Number(purchase.charCodeAt(0));
            if (price > voucherValue) {
                break;
            }
            otherCounter++;
        }   
        command = input[index++];
    }
console.log(counter);
console.log(otherCounter);
}
cinemaVoucher(["1500","Avengers: Endgame","Bohemian Rhapsody","Deadpool 2","End"]);

