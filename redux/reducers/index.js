import { combineReducers } from "redux";
import * as subscriptionReducer from "./subscriptionReducer";
import * as messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    newSubscription: subscriptionReducer.newSubscriptionReducer,
    newMessage: messageReducer.newMessageReducer,
});

export default rootReducer;
