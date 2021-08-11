import axios from "@/libs/axios";
import * as messageActionTypes from "../actionTypes/messageActionTypes";

export const createNewMessage = (messageData) => async (dispatch) => {
    try {
        dispatch({ type: messageActionTypes.NEW_MESSAGE_REQUEST });
        const response = await axios.post("/api/messages", messageData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: messageActionTypes.NEW_MESSAGE_SUCCESS,
            payload: response.data,
        });
    } catch (err) {
        dispatch({
            type: messageActionTypes.NEW_MESSAGE_FAILURE,
            payload: err.response.data.message,
        });
    }
};

export const resetNewMessage = () => {
    return {
        type: messageActionTypes.NEW_MESSAGE_RESET,
    };
};
