function personalTitles(input) {
    let age = Number(input[0]);
    let male = input[1];
    if (male === "f") {
        if (age < 16){
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    } else if (male === "m") {
        if (age < 16){
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    }
}
personalTitles(["12", "f"]);
