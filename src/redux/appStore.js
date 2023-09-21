import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import restaurantReducer from "./restaurantSlice";
import createSagaMiddleware from 'redux-saga';//SAGA 1
import restaurantSaga from "../sagas/restaurantSaga";

const saga = createSagaMiddleware(); //SAGA 2

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        restaurants: restaurantReducer
    },
    middleware: [saga] //SAGA 3
});

saga.run(restaurantSaga); // SAGA 4

export default appStore; 