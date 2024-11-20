const countries = [
    {
        flag: "magyarorszag.png",
        name: "Magyarország",
        id: 1
    },
    {
        flag: "nemetorszag.png",
        name: "Németország",
        id: 2
    },
    {
        flag: "olaszorszag.png",
        name: "Olaszország",
        id: 3
    },
    {
        flag: "csehorszag.png",
        name: "Csehország",
        id: 4
    },
    {
        flag: "szlovakia.png",
        name:  "Szlovákia",
        id: 5
    },
    {
        flag: "romania.png",
        name: "Románia",
        id: 6
    },
    {
        flag: "horvatorszag.png",
        name: "Horvátország",
        id: 7
    },
    {
        flag: "alban.png",
        name: "Albánia",
        id: 8
    },
    {
        flag: "szerbia.png",
        name: "Szerbia",
        id: 9
    },
    {
        flag: "bulgaria.png",
        name: "Bulgária",
        id: 10
    },
    {
        flag: "gorogorszag.png",
        name: "Görögország",
        id: 11
    },
    {
        flag: "franciaorszag.png",
        name: "Franciaország",
        id: 12
    },
    {
        flag: "hollandia.png",
        name: "Hollandia",
        id: 13
    },
    {
        flag: "belgium.png",
        name: "Belgium",
        id: 14
    },
    {
        flag: "spanyolorszag.png",
        name: "Spanyolország",
        id: 15
    },
    {
        flag: "portugalia.png",
        name: "Portugália",
        id: 16
    },
    {
        flag: "norvegia.png",
        name: "Norvégia",
        id: 17
    },
    {
        flag: "svajc.png",
        name: "Svédország",
        id: 18
    },
    {
        flag: "finnorszag.png",
        name: "Finnország",
        id: 19
    },
    {
        flag: "oroszorszag.png",
        name: "Oroszország",
        id: 20
    },
    {
        flag: "ukrajna.png",
        name: "Ukrajna",
        id: 21
    },
    {
        flag: "moldova.png",
        name: "Moldova",
        id: 22
    },
    {
        flag: "lengyelorszag.png",
        name: "Lengyelország",
        id: 23
    },
    {
        flag: "esztorszag.png",
        name: "Észtország",
        id: 24
    },
    {
        flag: "lettorszag.png",
        name: "Lettország",
        id: 25
    },
    {
        flag: "litvania.png",
        name: "Litvánia",
        id: 26
    },
    {
        flag: "ausztria.png",
        name: "Ausztria",
        id: 27
    },
    {
        flag: "svajc.png",
        name: "Svájc",
        id: 28
    },
    {
        flag: "feheroroszorszag.png",
        name: "Fehéroroszország",
        id: 29
        
    },
    {
        flag: "luxemburg.png",
        name: "Luxemburg",
        id: 30
    },
    {
        flag: "andorra.png",
        name: "Andorra",
        id: 31
    },
    {
        flag: "egyesult_kiralysag.png",
        name: "Egyesült Királyság",
        id: 32
    }


]


function getRandomNumber() {
    let newNum =  Math.floor(Math.random() * countries.length);
    return newNum;
}

function getCountryName(index) {
    let countryName = countries[index].name;
    return countryName;
}   

function getFlagImage(index) {
    let countryFlag = countries[index].flag;
    return countryFlag;
}

let currentNumber = getRandomNumber();
let currentCountryName = getCountryName(currentNumber);
let currentFlag = getFlagImage(currentNumber);

console.log(currentNumber)
console.log(currentCountryName)
console.log(currentFlag)

// Kép és input érték összehasonlítása az index.html-ből, ha jó dobja a következő képet

function getInputValue(){
    const input = document.getElementById("inp");
    return input.value;
}

function compareValues(inputValue, currentNumber){
    if(inputValue == countries[currentNumber].name){
        console.log("Siker!")
    } 
    else {
        console.log("Sajnáljuk, nem jó dobás!")
    }
}

function submitButton(){
    const inputValue = getInputValue();
    const button = document.getElementById("btn");
    button.addEventListener("click", ()=>{
        compareValues(inputValue, currentNumber)
    })
}
submitButton();
