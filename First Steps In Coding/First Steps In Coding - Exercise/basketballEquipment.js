function basketballEquipment(input) {
    let annualFee = Number(input[0]);
    
    let sneakers = annualFee - (annualFee * 0.40);
    let clothing = sneakers - (sneakers * 0.20);
    let ball = clothing / 4;   
    let accessories = ball / 5; 
    let total= annualFee + sneakers + clothing + ball + accessories;
    console.log(total.toFixed(2));
}
basketballEquipment(["365"]);