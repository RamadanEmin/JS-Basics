function password(input) {
    let i = 0;
    let name = input[i++];
    let pass = input[i++];
    let tempPass = input[i++];
    while (tempPass !== pass) {
        tempPass = input[i];
        i++;
    }
    console.log(`Welcome ${name}!`);
}
password(["Nakov", "1234", "Pass", "13234", "12234","1234"]);
