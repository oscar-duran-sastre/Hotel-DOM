
import {
    formInputCheckIn, formNameInputCheckIn, formAdultsInputCheckIn, formChildsInputCheckIn,
    formNightsInputCheckIn, formDniInputCheckIn, listAvailableRooms, resultPrintCheckIn, buttonRoomsList
} from './query-selectors.js';
import { availableRooms, availableBeds } from './available-space.js';
import { notEnoughSpaceAvailable } from './not-enough-space.js';
import { calculatePriceByNight } from './calculate-price.js';
import { store } from './store.js';

const checkIn = () => {
    formInputCheckIn.addEventListener('submit', event => {
        event.preventDefault();
        const nameCheckIn = formNameInputCheckIn.value;
        const adultsCheckIn = formAdultsInputCheckIn.value;
        const childsCheckIn = formChildsInputCheckIn.value;
        const nigthsCheckIn = formNightsInputCheckIn.value;
        return checkTotalAvailability(nameCheckIn, adultsCheckIn, childsCheckIn, nigthsCheckIn);
    });
};

const checkTotalAvailability = (name, adults, childs, nights) => {
    +adults + +childs <= availableBeds
        ? findRooms(name, adults, childs, nights)
        : notEnoughSpaceAvailable(+adults + +childs)
};

const findRooms = (name, adults, childs, nights) => {
    resultPrintCheckIn.innerHTML = ' ';
    availableRooms.forEach((value) => {
        resultPrintCheckIn.insertAdjacentHTML('beforeEnd',
            `<div class="list-group list-group-horizontal mt-3" id="${value.idNumber}">
                <a class="list-group-item list-group-item-action list-group-item-dark checkInList">
                    <span class="checkInListTitles">Habitación: </span>${value.idNumber}</a>
                <a class="list-group-item list-group-item-action list-group-item-dark checkInList">
                    <span class="checkInListTitles">Camas: </span>${value.beds}</a>
                <button type="submit" class="btn btn-sm btn-dark" id="${value.idNumber}">Seleccionar</button>
          </div>`);
        calculatePriceByNight(adults, childs, nights);
        return;
    });

    resultPrintCheckIn.addEventListener('click', event => {
        event.preventDefault();
        const selectedRoomsCheckIn = event.target.parentNode.id;

        console.log(selectedRoomsCheckIn);
        findRoomById(selectedRoomsCheckIn);
        return selectedRoomsCheckIn;
    });
};

const findRoomById = room => {
    const findRoomIndex = store.rooms.findIndex((value) => parseInt(value.idNumber) === parseInt(room));
    store.rooms[findRoomIndex].ocupied = true;
    return console.log(store.rooms);
}

export { checkIn };