function barcodeGenerator(input) {
    let a = input[0];
    let b = input[1];
    let a1 = Number(a[0]);
    let a2 = Number(a[1]);
    let a3 = Number(a[2]);
    let a4 = Number(a[3]);
    let b1 = Number(b[0]);
    let b2 = Number(b[1]);
    let b3 = Number(b[2]);
    let b4 = Number(b[3]);
    let buff = "";
    for (let i = a1; i <= b1; i++) {
        for (let j = a2; j <= b2; j++) {
            for (let k = a3; k <= b3; k++) {
                for (let l = a4; l <= b4; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        buff += ""+i + j + k + l + " ";
                    }
                }
            }
        }
    }
    console.log(buff);
}
barcodeGenerator(["2345", "6789"]);
