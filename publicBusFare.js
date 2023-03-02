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

