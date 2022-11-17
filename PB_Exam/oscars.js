function oscars(input) {
    let index = 0;
    let actorName = input[index++];
    let academyPoints = Number(input[index++]);
    let numberOfAssessors = Number(input[index++]);
    let point = 0;
    let isOscar = false;
    for (let i = 0; i < numberOfAssessors; i++) {
        let evaluatorName = "" + input[index++];
        let pointsFromEvaluator = Number(input[index++]);
        point = (evaluatorName.length * pointsFromEvaluator) / 2;
        academyPoints += point;
        if (academyPoints > 1250.5) {
            isOscar = true;
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
     if(!isOscar) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);
