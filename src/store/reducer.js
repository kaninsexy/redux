import { actionTypes } from './actionTypees';

const initialState = { counter: 0, counterList: [] };

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREASE) {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === actionTypes.DECREASE) {
    return { ...state, counter: state.counter - 1 };
  }
  if (action.type === actionTypes.PLUS) {
    return { ...state, counter: state.counter + 10 };
  }
  if (action.type === actionTypes.MINUS) {
    return { ...state, counter: state.counter - 10 };
  }
  if (action.type === actionTypes.RESET) {
    return { ...state, counter: 0 };
  }
  if (action.type === actionTypes.RECORD_COUNTER) {
    return { ...state, counterList: [...state.counterList, state.counter] };
  }
  return state;
};

export default reducer;
