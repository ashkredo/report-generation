import { homeAPI } from 'api';

const GENERATE_REPORT = 'report/homeReducer/GENERATE_REPORT';

const initialState = {
  url: null,
  interval: null,
  email: null
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_REPORT: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export const generateReportData = (
  url,
  interval,
  email
) => ({
  type: GENERATE_REPORT,
  payload: { url, interval, email }
});

export const generateReport = ({
  url,
  interval,
  email 
}) => async dispatch => {
  const response = await homeAPI.generateReport(
    url,
    interval,
    email
  );
    dispatch(generateReportData(response));
};

export default homeReducer;