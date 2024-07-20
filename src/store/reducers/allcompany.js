import { ALL_COMPANY } from '../constant/ActionType';

export default function AllCompaniesReducers(
  state = {
    allcompany: [],
    statuscode: null
  },
  action
) {
  switch (action.type) {
    case ALL_COMPANY:
      return {
        ...state,
        allcompany: action?.data?.data?.data,
        lastPage: action?.data?.data?.last_page
      };

    default:
  }

  return state;
}
