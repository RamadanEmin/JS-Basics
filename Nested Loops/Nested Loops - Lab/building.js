function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    for (let f = floors; f > 0; f--) {
        let buff = "";
        for (let r = 0; r < rooms; r++) {
            if (f === floors) {
                buff += "L" + f + r + " ";
            } else if (f % 2 === 0) {
                buff += "O" + f + r + " ";
            } else if (f % 2 !== 0) {
                buff += "A" + f + r + " ";
            }
        }
        console.log(buff);
    }
}
building(["6", "4"]);
