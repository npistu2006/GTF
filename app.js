const countries = [
    { flag: "magyarorszag.png", name: "Magyarország", id: 1 },
    { flag: "nemetorszag.png", name: "Németország", id: 2 },
    { flag: "olaszorszag.png", name: "Olaszország", id: 3 },
    { flag: "csehorszag.png", name: "Csehország", id: 4 },
    { flag: "szlovakia.png", name: "Szlovákia", id: 5 },
    { flag: "ro.png", name: "Románia", id: 6 },
    { flag: "horvatorszag.png", name: "Horvátország", id: 7 },
    { flag: "alban.png", name: "Albánia", id: 8 },
    { flag: "szerbia.png", name: "Szerbia", id: 9 },
    { flag: "bulgaria.png", name: "Bulgária", id: 10 },
    { flag: "gorogorszag.png", name: "Görögország", id: 11 },
    { flag: "franciaorszag.png", name: "Franciaország", id: 12 },
    { flag: "hollandia.png", name: "Hollandia", id: 13 },
    { flag: "belgium.png", name: "Belgium", id: 14 },
    { flag: "spanyolorszag.png", name: "Spanyolország", id: 15 },
    { flag: "portugalia.png", name: "Portugália", id: 16 },
    { flag: "norvegia.png", name: "Norvégia", id: 17 },
    { flag: "svajc.png", name: "Svédország", id: 18 },
    { flag: "finnorszag.png", name: "Finnország", id: 19 },
    { flag: "oroszorszag.png", name: "Oroszország", id: 20 },
    { flag: "ukrajna.png", name: "Ukrajna", id: 21 },
    { flag: "moldova.png", name: "Moldova", id: 22 },
    { flag: "lengyelorszag.png", name: "Lengyelország", id: 23 },
    { flag: "esztorszag.png", name: "Észtország", id: 24 },
    { flag: "lettorszag.png", name: "Lettország", id: 25 },
    { flag: "litvania.png", name: "Litvánia", id: 26 },
    { flag: "ausztria.png", name: "Ausztria", id: 27 },
    { flag: "svajc.png", name: "Svájc", id: 28 },
    { flag: "feherororszorszag.png", name: "Fehéroroszország", id: 29 },
    { flag: "luxemburg.png", name: "Luxemburg", id: 30 },
    { flag: "andorra.png", name: "Andorra", id: 31 },
    { flag: "egyesult_kiralysag.png", name: "Egyesült Királyság", id: 32 }
];

// Véletlenszerű szám generálása
function getRandomNumber() {
    return Math.floor(Math.random() * countries.length);
}

// Véletlenszerű ország kiválasztása
function getCountry(index) {
    return countries[index];
}

// Jelenlegi ország, zászló és név beállítása
let currentNumber = getRandomNumber();
let currentCountry = getCountry(currentNumber);
let currentFlag = currentCountry.flag;
let currentCountryName = currentCountry.name;
let countryId = currentCountry.id;

console.log(currentNumber);
console.log(currentCountryName);
console.log(currentFlag);
console.log(countryId);

// Zászló megjelenítése
function render() {
    const flagImage = document.querySelector(".flag");
    flagImage.innerHTML = `<img src="zaszlok/${currentFlag}" alt="${currentCountryName}">`;
}

// Válasz ellenőrzése
function checkAnswer() {
    const userInput = document.getElementById("country-name-input").value.trim().toLowerCase();
    const resultDiv = document.querySelector(".result");

    if (userInput === currentCountryName.toLowerCase()) {
        resultDiv.textContent = "Helyes válasz! Gratulálok!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Hibás válasz! A helyes válasz: ${currentCountryName}`;
        resultDiv.style.color = "red";
    }

    // Töltsd be a következő országot
    setTimeout(() => {
        currentNumber = getRandomNumber(); // új véletlenszerű szám
        currentCountry = getCountry(currentNumber); // új ország
        currentFlag = currentCountry.flag; // új zászló
        currentCountryName = currentCountry.name; // új név
        render(); // új zászló kirajzolása
        document.getElementById("country-name-input").value = ''; // Töröld az előző választ
    }, 2000); // 2 másodperc múlva új zászló
}

document.addEventListener("DOMContentLoaded", function() {
    render();

    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", checkAnswer);
});
