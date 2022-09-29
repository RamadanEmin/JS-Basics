function salary(input) {
    let openTabsCounter = Number(input[0]);
    let salarii = Number(input[1]);
    let inputL = input.length;
    for (let i = 2; i < inputL; i++) {
        let site = input[i];
        switch (site) {
            case "Facebook": salarii -= 150; break;
            case "Instagram": salarii -= 100; break;
            case "Reddit": salarii -= 50; break;
        }
        if (salarii <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salarii > 0) {
        console.log(Math.floor(salarii));
    }
}
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);


