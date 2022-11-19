function balls(input = []) {
    let totalSum = 0;
    let redBall = 0;
    let orangeBall = 0;
    let yellowBall = 0;
    let whiteBall = 0;
    let blackBall = 0;
    let otherBall = 0;
    const balls = Number(input.shift());
    for (let i = 0; i < balls; i++) {
        switch (input[i]) {
            case 'red':
                redBall++;
                totalSum += 5;
                break;
            case 'orange':
                orangeBall++;
                totalSum += 10;
                break;
            case 'yellow':
                yellowBall++;
                totalSum += 15;
                break;
            case 'white':
                whiteBall++;
                totalSum += 20;
                break;
            case 'black':
                blackBall++;
                totalSum = Math.floor(totalSum / 2);
                break;
            default:
                otherBall++;
                break;
        }
    }
    console.log(`Total points: ${totalSum}`);
    console.log(`Red balls: ${redBall}`);
    console.log(`Orange balls: ${orangeBall}`);
    console.log(`Yellow balls: ${yellowBall}`);
    console.log(`White balls: ${whiteBall}`);
    console.log(`Other colors picked: ${otherBall}`);
    console.log(`Divides from black balls: ${blackBall}`);
}
balls(([
    '10',
    'white',
    'white',
    'ee',
    'red',
    'orange',
    'red',
    'black',
    'black',
    'black',
    'black']));