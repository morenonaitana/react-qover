import { UPDATE_QUOTE } from './types';

export const updateQuote = (data) => ({
    type: UPDATE_QUOTE,
    age: data.age,
    car: data.car,
    price: data.price,
});