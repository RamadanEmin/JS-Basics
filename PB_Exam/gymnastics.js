function gymnastics(input = []) {
    const country = input[0];
    const device = input[1];
    let difficultyScore = 0;
    let performingScore = 0;
    switch (device) {
        case 'ribbon':
            switch (country) {
                case 'Russia':
                    difficultyScore = 9.100;
                    performingScore = 9.400;
                    break;
                case 'Bulgaria':
                    difficultyScore = 9.600;
                    performingScore = 9.400;
                    break;
                case 'Italy':
                    difficultyScore = 9.200;
                    performingScore = 9.500;
                    break;
            }
            break;
        case 'hoop':
            switch (country) {
                case 'Russia':
                    difficultyScore = 9.300;
                    performingScore = 9.800;
                    break;
                case 'Bulgaria':
                    difficultyScore = 9.550;
                    performingScore = 9.750;
                    break;
                case 'Italy':
                    difficultyScore = 9.450;
                    performingScore = 9.350;
                    break;
            }
            break;
        case 'rope':
            switch (country) {
                case 'Russia':
                    difficultyScore = 9.600;
                    performingScore = 9.000;
                    break;
                case 'Bulgaria':
                    difficultyScore = 9.500;
                    performingScore = 9.400;
                    break;
                case 'Italy':
                    difficultyScore = 9.700;
                    performingScore = 9.150;
                    break;
            }
            break;
    }
    let totalScore = difficultyScore + performingScore;
    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${device}.`);
    console.log(`${(100 - (totalScore / 20) * 100).toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
