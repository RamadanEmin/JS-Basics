function walking(input) {
    let target = 10000;
    let totalsteps = 0;
    let index = 0;
    let command = input[index];
    index++;
    while (command !== "Going home") {
        let steps = Number(command);
        totalsteps += steps;
        if (target <= totalsteps) {
            console.log("Goal reached! Good job!");
            console.log(`${totalsteps - target} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Going home") { 
        command = input[index];
        let walkingHome = Number(command);
        totalsteps += walkingHome;
        if (target <= totalsteps) {
            console.log("Goal reached! Good job!");
            console.log(`${totalsteps - target} steps over the goal!`);
        } else {
            console.log(`${Math.abs(totalsteps - target)} more steps to reach goal.`);
        }
    }
}
walking(["125","250","4000","30","2678","4682"]);



