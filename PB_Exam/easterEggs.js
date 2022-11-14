function easterEggs(input) {
    let index = 0;
    let numberOfEggs = Number(input[index++]);
    let maxEggs = "";
    let maxNum = 0;
    let r = 0;
    let o = 0;
    let b = 0;
    let g = 0;
    for (let i = 1; i <= numberOfEggs; i++) {
        let color = input[index++];
        switch (color) {
            case "red": r++;
                break;
            case "orange": o++;
                break;
            case "blue": b++;
                break;
            case "green": g++;
                break;
        }
    }
    if (r > o && r > b && r > g) {
        maxEggs = "red";
        maxNum = r;
    } else if (o > r && o > b && o > g){
        maxEggs = "orange";
        maxNum = o;
    } else if (b > r && b > o && b > g){
        maxEggs = "blue";
        maxNum = b;
    }else {
        maxEggs = "green";
        maxNum = g;
    }
    console.log(`Red eggs: ${r}`);
    console.log(`Orange eggs: ${o}`);
    console.log(`Blue eggs: ${b}`);
    console.log(`Green eggs: ${g}`);
    console.log(`Max eggs: ${maxNum} -> ${maxEggs}`);
}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);