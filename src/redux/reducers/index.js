import { combineReducers } from "redux";
import app from "./app";
import cart from "./cart";
import filters from "./filters";
import pizzas from "./pizzas";

const rootReducer = combineReducers({
    app,
    filters,
    pizzas,
    cart,
});

export default rootReducer;
