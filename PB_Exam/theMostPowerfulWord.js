function theMostPowerfulWord(input) {
    let index = 0;
    let command = input[index++];
    let mostPowerfulWord = "";
    let mostPowerful = 0;
    while (command !== "End of words") {
        let words = "" + command;
        let power = 0;     
        for (let i = 0; i < words.length; i++) {
            let nextWord = words.charCodeAt(i);
            power += nextWord;
        }
        let vowel = words.charAt(0).toLowerCase();
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" || vowel === "y") {
            power *= words.length;
        } else {
            power /= words.length;
        }
        if (power > mostPowerful) {
            mostPowerfulWord = words;
            mostPowerful = power;
        }
        command = input[index++];
    }
    console.log(`The most powerful word is ${mostPowerfulWord} - ${Math.floor(mostPowerful)}`);
}
theMostPowerfulWord(["But","Some","People","Say","It's","LOVE","End of words"]);

