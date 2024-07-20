import {
    EDIT_USER
} from "../constant/ActionType";

export default function EditUserDataReducer(state = {
    edituser: [],
    statusCode: null,
}, action) {
    switch (action.type) {
        case EDIT_USER:
            return {
                ...state,
                edituser: action.data,
                    statusCode: action.status
            };

        default:
    }

    return state;
}