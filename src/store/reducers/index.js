// third-party
import { combineReducers } from "redux";

// project-imports
import menu from "./menu";
import EditUserDataReducer from "./edituser";

import AllCompaniesReducers from "./allcompany";

import GetAllCurrency from "./users/getAllCurrency";
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({

  GetAllCurrency,
  menu,
  // AllBatchesReducers,
  EditUserDataReducer,
  // SubAllCateReducers,
  AllCompaniesReducers,
});

export default reducers;
