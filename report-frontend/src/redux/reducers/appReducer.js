import { appAPI } from 'api';

const INITIALIZED_SUCCESS = 'report/appReducer/INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch) => {
  const response = await appAPI.connectAPI();
  Promise.all([response]).then(() => {
    if (response) {
      dispatch(initializedSuccess());
    }
  });
};

export default appReducer;