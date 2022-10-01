function cake(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let piecesOfCake = width * length;
    let piece = input[index++];
    while (piece !== "STOP") {
        let pieces = Number(piece);
        if (piecesOfCake < 0) {
            break;
        }
        piecesOfCake -= pieces;
        piece = input[index++];
    }
    if (piecesOfCake > 0) {
        console.log(`${piecesOfCake} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(piecesOfCake)} pieces more.`);
    }
}
cake(["10","2","2","4","6","STOP"]);
