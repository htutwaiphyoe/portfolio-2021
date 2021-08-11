import * as messageActionTypes from "../actionTypes/messageActionTypes";
import { updateState } from "@/utils/helpers";

export const newMessageReducer = (state = { loading: false, message: "", error: null }, action) => {
    switch (action.type) {
        case messageActionTypes.NEW_MESSAGE_REQUEST:
            return updateState(state, { loading: true });
        case messageActionTypes.NEW_MESSAGE_SUCCESS:
            return updateState(state, { loading: false, message: action.payload.message });
        case messageActionTypes.NEW_MESSAGE_FAILURE:
            return updateState(state, { loading: false, error: action.payload });
        case messageActionTypes.NEW_MESSAGE_RESET:
            return updateState(state, { loading: false, message: "", error: null });
        default:
            return state;
    }
};
