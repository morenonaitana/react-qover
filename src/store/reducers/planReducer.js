import { UPDATE_PLAN, UPDATE_YEARLY } from '../actions/types';

const plans = {
  GLOBAL: 'global',
  UNIVERSE: 'universe',
}

const initialState = {
  selectedPlan: 'global',
  yearly: true,
}

export default function(state = initialState, action){
  switch(action.type){
    case UPDATE_PLAN:
      return {
        ...state,
        selectedPlan: action.selectedPlan,
      }
    case UPDATE_YEARLY:
      return {
        ...state,
        yearly: action.yearly,
      }
    default:
      return state;
  }
}

export { plans };
