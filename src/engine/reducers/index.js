import { combineReducers } from "redux";
import ui from "./ui";
import user from "./user";
import transactions from "./transactions";

export const rootReducer = combineReducers({ ui, user, transactions });
export default rootReducer;
