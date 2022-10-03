function moving(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let height = Number(input[index++]);
    let housingVolume = width * length * height;
    let sumVolume = 0;
    while (housingVolume > sumVolume) {
        let volume = input[index];
        index++;
        if (volume === "Done") {
            console.log(`${housingVolume - sumVolume} Cubic meters left.`);
            break;
        }
        sumVolume += Number(volume);
    }
    if(housingVolume < sumVolume){
        console.log(`No more free space! You need ${sumVolume - housingVolume} Cubic meters more.`);
    }
}
moving(["10", "1","2","Done", "6","Done"]);

