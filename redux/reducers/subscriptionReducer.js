import * as subscriptionActionTypes from "../actionTypes/subscriptionActionTypes";
import { updateState } from "@/utils/helpers";

export const newSubscriptionReducer = (
    state = { loading: false, message: "", error: null },
    action
) => {
    switch (action.type) {
        case subscriptionActionTypes.NEW_SUBSCRIPTION_REQUEST:
            return updateState(state, { loading: true });
        case subscriptionActionTypes.NEW_SUBSCRIPTION_SUCCESS:
            return updateState(state, { loading: false, message: action.payload.message });
        case subscriptionActionTypes.NEW_SUBSCRIPTION_FAILURE:
            return updateState(state, { loading: false, error: action.payload });
        case subscriptionActionTypes.NEW_SUBSCRIPTION_RESET:
            return updateState(state, { loading: false, message: "", error: null });
        default:
            return state;
    }
};
