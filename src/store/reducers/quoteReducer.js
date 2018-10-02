import { UPDATE_QUOTE } from '../actions/types';


const initialState = {
  age: '',
  car: '',
  price: '',
}

export default function(state = initialState, action){
  switch(action.type){
    case UPDATE_QUOTE:
      return {
        ...state,
        age: action.age,
        car: action.car,
        price: action.price,
      }
    default:
      return state;
  }
}