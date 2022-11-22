function birthdayParty(input) {
    const rentHall = Number(input);
    const cake = rentHall * 0.20;
    const drinks = cake * 0.55;
    const animator = rentHall / 3;
    const budget = rentHall + cake + drinks + animator;
    console.log(`${budget}`);
}
birthdayParty(2250);
birthdayParty(3720);