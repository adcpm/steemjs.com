import * as devTypes from './devActionTypes';

const initialState = {
  app: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case devTypes.CREATE_APPLICATION:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};
