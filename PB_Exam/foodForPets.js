function foodForPets(input = []) {
    const numberOfDays = Number(input.shift());
    const amountOfFood = Number(input.shift());
    let eatenFromCat = 0;
    let eatenFromDog = 0;
    let biscuits = 0;
    for (let i = 1; i <= numberOfDays; i++) {
        let dog = Number(input.shift());
        let cat = Number(input.shift());
        if (i % 3 === 0) {
            biscuits += (dog + cat) * 0.10;
        }
        eatenFromDog += dog;
        eatenFromCat += cat;
    }
    let totalEatenFood = eatenFromDog + eatenFromCat;
    console.log(`Total eaten biscuits: ${biscuits.toFixed(0)}gr.`);
    console.log(`${((totalEatenFood / amountOfFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((eatenFromDog / totalEatenFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((eatenFromCat / totalEatenFood) * 100).toFixed(2)}% eaten from the cat.`);
}
foodForPets([
    "3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
