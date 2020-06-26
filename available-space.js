
import { store } from './store.js';

const availableRooms = store.rooms.filter((value) => value.ocupied === false);

const availableBeds = availableRooms.map(item => item.beds).reduce((prev, next) => +prev + +next);

export { availableRooms, availableBeds };