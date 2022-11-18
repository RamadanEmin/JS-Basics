function pCGameShop(input) {
    let index = 0;
    let gameCount = Number(input[index++]);
    let countHearthstone = 0;
    let countFornite = 0;
    let countOverwatch = 0;
    let countOther = 0;
    for (let i = 0; i < gameCount; i++) {
        let name = input[index++];
        switch (name) {
            case "Hearthstone": countHearthstone++; break;
            case "Fornite": countFornite++; break;
            case "Overwatch": countOverwatch++; break;
            default: countOther++; break;
        }
    }
    let hearthstoneP =countHearthstone / gameCount *100;
    let forniteP =countFornite / gameCount *100;
    let overwatchP=countOverwatch / gameCount *100;
    let otherP=countOther / gameCount *100;
    console.log(`Hearthstone - ${hearthstoneP.toFixed(2)}%`);
console.log(`Fornite - ${forniteP.toFixed(2)}%`);
console.log(`Overwatch - ${overwatchP.toFixed(2)}%`);
console.log(`Others - ${otherP.toFixed(2)}%`);
}
pCGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
