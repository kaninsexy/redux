import { actionTypes } from '../actionTypes';

const initialState = { counterList: [] };

const counterListreducer = (state = initialState, action) => {
  if (action.type === actionTypes.RECORD_COUNTER) {
    return { ...state, counterList: [...state.counterList, action.number] };
  }
  return state;
};

export default counterListreducer;
