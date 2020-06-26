
import { childDiscount, taxes, priceOneNight } from './discounts-&-taxes.js';

const calculatePriceByNight = (adults, childs, nights) => {
    const priceByNight = adults * (priceOneNight * (1 + taxes)) + childs * (priceOneNight * childDiscount) * (1 + taxes);
    console.log(priceByNight);
    console.log(priceByNight);
    calculateTotalPrice(nights, priceByNight);
    return priceByNight;
}

const calculateTotalPrice = (nights, price) => {
    const totalPrice = nights * price;
    console.log(totalPrice);
    return totalPrice;
}

export { calculatePriceByNight };