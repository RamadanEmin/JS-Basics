function nameGame(input) {
    let index = 0;
    let command = input[index++];
    let winerName = "";
    let winerPoint = 0;
    while (command !== "Stop") {
        let name = "" + command;
        let points = 0;
        for (let i = 0; i < name.length; i++) {
            let number = Number(input[index++]);
            if (name.charCodeAt(i) === number) {
                points += 10;
            } else {
                points += 2;
            }

        }
        if (points >= winerPoint) {
            winerName = name;
            winerPoint = points
        }
        command = input[index++];
    }
console.log(`The winner is ${winerName} with ${winerPoint} points!`);
}
nameGame(["Ivan","73","20","98","110","Ivo","80","65","87","Stop"]);
