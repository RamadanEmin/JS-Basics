function tennisEquipment(input = []) {
    const tennisRacketPrice = Number(input[0]);
    const racketsNumber = Number(input[1]);
    const sneakersNumber = Number(input[2]);
    const racketsPrice = racketsNumber * tennisRacketPrice;
    const sneakersPrice = (tennisRacketPrice / 6) * sneakersNumber;
    const otherEquipmentPrice = (racketsPrice + sneakersPrice) * 0.20;
    let totalPrice = racketsPrice + sneakersPrice + otherEquipmentPrice;
    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil((totalPrice / 8) * 7)}`);
}
tennisEquipment([850, 4, 2]);
tennisEquipment([386, 7, 4]);