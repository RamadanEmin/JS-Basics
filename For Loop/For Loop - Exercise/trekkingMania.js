function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let numberOfPeopleInAGroup = Number(input[1]);
    let musalla = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeoples = 0;
    for (let i = 1; i < 1 + groupsCount; i++) {
        let index = Number(input[i]);
        totalPeoples += index;
        if (index <= 5) {
            musalla += index;
        } else if (index <= 12) {
            montBlanc += index;
        } else if (index <= 25) {
            kilimanjaro += index;
        } else if (index <= 40) {
            k2 += index;
        } else if (index >= 41) {
            everest += index;
        }
    }
    console.log(`${((musalla / totalPeoples) * 100).toFixed(2)}%`);
    console.log(`${((montBlanc / totalPeoples) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / totalPeoples) * 100).toFixed(2)}%`);
    console.log(`${((k2 / totalPeoples) * 100).toFixed(2)}%`);
    console.log(`${((everest / totalPeoples) * 100).toFixed(2)}%`);
}
trekkingMania(["5","25","41","31","250","6"]);
