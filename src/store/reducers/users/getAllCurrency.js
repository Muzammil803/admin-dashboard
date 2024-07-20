
import {
    GET_ALL_CURRENCY
} from "../../constant/ActionType";

export default function AllDataClientsReduc(state = {
    getAllCurrency: [],

}, action) {
    switch (action.type) {
        case GET_ALL_CURRENCY:
            return {
                ...state,
                getAllCurrency: action?.data,
            };

        default:
    }

    return state;
}