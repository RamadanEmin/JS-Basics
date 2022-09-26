function onTimeForTheExam(input) {
    let hourOfTheExam = Number(input[0]);
    let minuteOfTheExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);
    let examTime = (hourOfTheExam * 60) + minuteOfTheExam;
    let arrivalTime = (hourOfArrival * 60) + minuteOfArrival;
    let totalMinutesIsDifference = examTime - arrivalTime;
    let arrival = arrivalTime - examTime;
    let minute = totalMinutesIsDifference % 60;
    let minuteArrival = arrival %60;
    if (arrivalTime > examTime) {
        console.log("Late");
        if (arrival >= 60) {
            if (minuteArrival < 10) {
                console.log(`${Math.floor(arrival / 60)}:0${arrival % 60} hours after the start`);
            } else {
                console.log(`${Math.floor(arrival / 60)}:${arrival % 60} hours after the start`);
            }
        } else {
            if (minuteArrival < 10) {
                console.log(`${arrival % 60} minutes after the start`);
            } else {
                console.log(`${arrival % 60} minutes after the start`);
            }
        }
    } else if (arrivalTime === examTime || totalMinutesIsDifference <= 30) {
        console.log("On time");
        if (minute < 10) {
            console.log(`${totalMinutesIsDifference % 60} minutes before the start`);
        } else {
            console.log(`${totalMinutesIsDifference % 60} minutes before the start`);
        }
    } else if (arrivalTime < examTime) {
        console.log("Early");
        if (totalMinutesIsDifference >= 60) {
            if (minute < 10) {
                console.log(`${Math.floor(totalMinutesIsDifference / 60)}:0${totalMinutesIsDifference % 60} hours before the start`);
            } else {
                console.log(`${Math.floor(totalMinutesIsDifference / 60)}:${totalMinutesIsDifference % 60} hours before the start`);
            }
        } else {
            if (minute < 10) {
                console.log(`${totalMinutesIsDifference % 60} minutes before the start`);
            } else {
                console.log(`${totalMinutesIsDifference % 60} minutes before the start`);
            }
        }
    }
}
onTimeForTheExam(["9","00","8","30"])







