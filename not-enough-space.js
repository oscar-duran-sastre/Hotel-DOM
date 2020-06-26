
import { availableBeds } from './available-space.js'

const notEnoughSpaceAvailable = (number) => {
    const differenceOfSpace = number - availableBeds;
    resultPrintCheckIn.innerHTML = ' ';
    return resultPrintCheckIn.insertAdjacentHTML('beforeEnd',
        `No disponemos de camas suficientes. Faltan ${differenceOfSpace} camas.`);
}

export { notEnoughSpaceAvailable };