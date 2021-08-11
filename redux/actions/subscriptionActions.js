import axios from "@/libs/axios";
import * as subscriptionActionTypes from "../actionTypes/subscriptionActionTypes";

export const createNewSubscription = (subscription) => async (dispatch) => {
    try {
        dispatch({ type: subscriptionActionTypes.NEW_SUBSCRIPTION_REQUEST });
        const response = await axios.post("/api/subscriptions", subscription, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: subscriptionActionTypes.NEW_SUBSCRIPTION_SUCCESS,
            payload: response.data,
        });
    } catch (err) {
        dispatch({
            type: subscriptionActionTypes.NEW_SUBSCRIPTION_FAILURE,
            payload: err.response.data.message,
        });
    }
};
