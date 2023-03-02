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