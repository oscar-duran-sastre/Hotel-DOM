
// import { store } from './store.js';
import { availableRooms, availableBeds } from './available-space.js';
import { formInputCheckIn, formNameInputCheckIn, formAdultsInputCheckIn, formChildsInputCheckIn, formNightsInputCheckIn, formDniInputCheckIn, listAvailableRooms, resultPrintCheckIn } from './query-selectors.js';
import { notEnoughSpaceAvailable } from './not-enough-space.js';
import { calculatePriceByNight } from './calculate-price.js';
// import { availableRoomsSorted } from './sort-rooms.js';

const checkIn = () => {
    formInputCheckIn.addEventListener('submit', event => {
        event.preventDefault();
        const nameCheckIn = formNameInputCheckIn.value;
        const adultsCheckIn = formAdultsInputCheckIn.value;
        const childsCheckIn = formChildsInputCheckIn.value;
        const nigthsCheckIn = formNightsInputCheckIn.value;
        calculatePriceByNight(adultsCheckIn, childsCheckIn, nigthsCheckIn);
        return checkTotalAvailability(nameCheckIn, adultsCheckIn, childsCheckIn, nigthsCheckIn);
    });
};

const checkTotalAvailability = (name, adults, childs, nights) => {
    +adults + +childs <= availableBeds
        ? findRooms(name, adults, childs, nights)
        : notEnoughSpaceAvailable(+adults + +childs)
};

const findRooms = (name, adults, childs, nigths) => {
    resultPrintCheckIn.innerHTML = ' ';
    availableRooms.forEach((value) => {
        resultPrintCheckIn.insertAdjacentHTML('beforeEnd',
            `<div class="list-group list-group-horizontal mt-3" id="${value.idNumber}">
                <a class="list-group-item list-group-item-action list-group-item-dark checkInList"><span class="checkInListTitles">Habitación: </span>${value.idNumber}</a>
                <a class="list-group-item list-group-item-action list-group-item-dark checkInList"><span class="checkInListTitles">Camas: </span>${value.beds}</a>
                <button type="submit" class="btn btn-sm btn-dark">Seleccionar</button>
          </div>`);
        // resultPrintCheckIn.insertAdjacentHTML('beforeEnd',
        //     `<div class="list-group list-group-horizontal mt-3" id="${value.idNumber}">
        //         <a class="list-group-item list-group-item-action list-group-item-dark checkInList"><span class="checkInListTitles">Precio por noche: </span>${value.idNumber}</a>
        //         <a class="list-group-item list-group-item-action list-group-item-dark checkInList"><span class="checkInListTitles">Precio total: </span>${value.beds}</a>
        //         <button type="submit" class="btn btn-sm btn-dark">Confirmar</button>
        //   </div>`);
    });

    resultPrintCheckIn.insertAdjacentHTML('afterEnd',
        `<div class="list-group list-group-horizontal mt-3">
        <a class="list-group-item list-group-item-action list-group-item-dark checkInList"><span class="checkInListTitles">Precio por noche: </span>${1}</a>
        <a class="list-group-item list-group-item-action list-group-item-dark checkInList"><span class="checkInListTitles">Precio total: </span>${2}</a>
        <button type="submit" class="btn btn-sm btn-dark">Confirmar selección</button>
    </div>`);

    resultPrintCheckIn.addEventListener('click', event => {
        event.preventDefault();
        const selectedRoomsCheckIn = event.target.parentNode.id;
        console.log(selectedRoomsCheckIn);
        return;
        // const y = event.target.listAvailableRooms.idNumber;
        // return console.log(event.target.parentNode.id);
        // const y = event.target.listAvailableRooms.idNumber('click');
        // console.log(x);
        // console.log(y);
    });
};

export { checkIn };