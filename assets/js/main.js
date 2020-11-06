// Erstellen wir also für jeden Kartentyp ein Array, das die Objekte enthält, die jede Karte repräsentieren. Diese Arrays sollten als suspectsArray, weaponsArray, roomsArray benannt werden.

let mrGreen = {
    firstName: "Jacob",
    lastName: "Green", 
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: '<img src="assets/img/mr_green.jpg">',
    color: "green"
}
let drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: '<img src="assets/img/Dr_orchid.jpg">',
    color: "white"
}
let profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: '<img src="assets/img/plum.jpg">',
    color: "purple"
}
let missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actress",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: '<img src="assets/img/miss_scarlett.jpg">',
    color: "red"
} 
let mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: '<img src="assets/img/Eleanor_peacock.jpg">',
    color: "blue"
} 
let mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: '<img src="assets/img/Jack_mustard.jpg">',
    color:  "yellow"
} 

const suspectsArray = [
    mrGreen,
    drOrchid,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard 
]

//Weapons:
const weaponsArray = [
    {    
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8 
    },
    {    
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30 
    },
    {    
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15 
    },
    {    
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25 
    },
    {
        name: "pistol",
        weight: 20 
    }
]
//rooms
const roomsArray = [
    "Dinning Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio"   
];


//random function zum auswählen der 3 Karten: suspect, weapon und room
//esta es la función general para sacar un valor random de un array:
//let randomValue = array[Math.floor(Math.random() * array.length)];

const selectRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}
console.log(selectRandom);



// Deklariere eine Funktion namens pickMystery, die keine Argumente annimmt und ein Objekt mit drei Eigenschaften zurückgibt: Verdächtiger, Waffe und Raum, wobei jede als Wert eine Karte dieses spezifischen Typs enthält. Du kannst eine zufällige Karte jedes Typs erhalten, indem du selectRandom auf jedem Kartenstapel aufrufst.

function pickMystery(){
    let mystery =[];
    mystery.push(selectRandom(suspectsArray));
    mystery.push(selectRandom(weaponsArray));
    mystery.push(selectRandom(roomsArray));
    // console.log(mystery);
    return mystery;
}
// pickMystery()


// Deklariere eine Funktion namens revealMystery, die ein Objekt (wie das von pickMystery zurückgegebene) als einziges Argument erhält und eine Enthüllungsnachricht im folgenden Format zurückgibt:
// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!// Dazu ein Bild. 
//wenn du auf dem Button klickst, werden ein bild, name ,weapon gezeigt

let result = 0;
function revealMystery(){
    let result = document.getElementById('result')
    let randomMystery = pickMystery();

    result.innerHTML = `<h2>${randomMystery[0].firstName} ${randomMystery[0].lastName} killed Mr. Boddy using the ${randomMystery[1].name} in the ${randomMystery[2]}!</h2> <img> ${randomMystery[0].image}</img>`
}
// revealMystery();

