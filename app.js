

function getRandomNumber() {
    let newNum =  Math.floor(Math.random() * countries.length);
    return newNum;
}

function getCountryName() {
    let countryName = countries[currentNumber];
    return countryName;
}

let currentNumber = getRandomNumber();
let currentCountryName = getCountryName();


