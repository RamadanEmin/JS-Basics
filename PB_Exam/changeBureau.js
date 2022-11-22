function changeBureau(input = []) {
    const bitcoins = Number(input[0]);
    const chineseYuan = Number(input[1]);
    const commission = Number(input[2]);
    const euro = 1.95;
    const dolar = 1.76;
    let change = (bitcoins * 1168 + chineseYuan * 0.15 * dolar) * ((100 - commission) / 100);
    change /= euro;
    console.log(`${change.toFixed(2)}`);
}
changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
