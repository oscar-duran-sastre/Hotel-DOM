
import { resultPrintPrice } from './query-selectors.js'
import { childDiscount, taxes, priceOneNight } from './discounts-&-taxes.js';

const calculatePriceByNight = (adults, childs, nights) => {
    const priceByNight = adults * (priceOneNight * (1 + taxes)) + childs * (priceOneNight * childDiscount) * (1 + taxes);
    calculateTotalPrice(nights, priceByNight);
    return priceByNight;
}

const calculateTotalPrice = (nights, price) => {
    const totalPrice = nights * price;
    showPrices(totalPrice, price);
    return totalPrice;
}

const showPrices = (total, byNight) => {
    resultPrintPrice.innerHTML = ' ';
    resultPrintPrice.insertAdjacentHTML('beforeEnd',
        `<div class="list-group list-group-horizontal mt-3">
        <a class="list-group-item list-group-item-action list-group-item-dark checkInList">
            <span class="checkInListTitles">Precio por noche: </span>${byNight}</a>
        <a class="list-group-item list-group-item-action list-group-item-dark checkInList">
            <span class="checkInListTitles">Precio total: </span>${total}</a>
        <button type="submit" class="btn btn-sm btn-dark">Confirmar selección</button>
    </div>`);
};

resultPrintPrice.addEventListener('click', event => {
    event.preventDefault();
    const confirmSelectedRoomsCheckIn = event.target.parentNode.id;
    console.log(confirmSelectedRoomsCheckIn);
    return console.log('hola');
});

export { calculatePriceByNight };