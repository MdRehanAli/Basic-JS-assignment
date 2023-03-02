// 1. convert radian to degree

function radianToDegree(radian) {
    // data type check 
    if (typeof radian !== 'number') {
        return 'Please Enter a number!';
    }

    const pi = Math.PI;

    // calculation
    const degree = (180 / pi) * radian;

    // calculated value in round figure
    const degreeInRound = Math.round(degree);
    return degreeInRound;

}

const radian = 5;
const degrees = radianToDegree(radian);
console.log(degrees);



// 2. Check whether the given file name is a javaScript file or not.

function isJavaScriptFile(fileName) {
    // data type check 
    if (typeof fileName !== 'string') {
        return 'Please Enter a string!';
    }

    const files = fileName.endsWith('.js');
    return files;
}

const fileName = 'javascript.js';
const file = isJavaScriptFile(fileName);
console.log(file);



// 3. calculate the total oil price

function oilPrice(diesel_quantity, petrol_quantity, octane_quantity) {
    // data type check 
    if (typeof diesel_quantity !== 'number' || typeof petrol_quantity !== 'number' || typeof octane_quantity !== 'number') {
        return 'Please Enter a number!';
    }

    const dieselPricePerLitre = 114;
    const petrolPricePerLitre = 130;
    const octanePricePerLitre = 135;

    const totalDieselPrice = dieselPricePerLitre * diesel_quantity;
    const totalPetrolPrice = petrolPricePerLitre * petrol_quantity;
    const totalOctanePrice = octanePricePerLitre * octane_quantity;

    // Calculation Total Price 
    const totalOilPrice = totalDieselPrice + totalOctanePrice + totalPetrolPrice;

    return totalOilPrice;


}

const diesel_quantity = 5;
const petrol_quantity = 4;
const octane_quantity = 3;

const price = oilPrice(diesel_quantity, petrol_quantity, octane_quantity);
console.log(price);



// 4. Calculate total Public Bus Fare

function publicBusFare(people) {
    // data type check 
    if (typeof people !== 'number') {
        return 'Please Enter a number!';
    }

    const perBusCovered = 50;
    const perMicrobusCovered = 11;

    const perPublicBusFare = 250;

    // calculate remaining person
    const remainingAfterBusCovered = people % perBusCovered;
    const remainingAfterMicrobusCovered = remainingAfterBusCovered % perMicrobusCovered;

    //total bus fare 
    const totalBusFare = remainingAfterMicrobusCovered * perPublicBusFare;

    return totalBusFare;

}

const people = 65;
const fare = publicBusFare(people);
console.log(fare);




// 5. Check whether the given object's person are BestFriend or not

function isBestFriend(person) {
    // data type check 
    if (Array.isArray(person) !== true) {
        return 'Please Enter an object type Array';
    }

    // Declare Two Empty array for placing object values and compare with each other
    let newName = [];
    let newFriend = [];
    for (let i = 0; i < person.length; i++) {
        const index = i;
        const element = person[index];

        // Put values in the empty arrays
        newName.push(element.name);
        newFriend.push(element.friend);

    }

    // compare with each other under a conditional statement
    if (newName[0] == newFriend[1] && newName[1] == newFriend[0]) {
        return true;
    }
    else {
        return false;
    }
}

const person = [{ name: 'Tom', friend: 'Rock' }, { name: 'Rock', friend: 'Tom' }];
const friends = isBestFriend(person);
console.log(friends);