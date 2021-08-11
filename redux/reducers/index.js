import { combineReducers } from "redux";
import * as subscriptionReducer from "./subscriptionReducer";

const rootReducer = combineReducers({
    newSubscription: subscriptionReducer.newSubscriptionReducer,
});

export default rootReducer;
