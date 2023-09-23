# @@@@@@@@@@@@@@@ HIGH LEVEL DESIGN @@@@@@@@@@@@@@@

# Header
  - Logo
  - Address
  - Search
  - Cart
  - Name
    - Profile

# Body
  - Restaurant
    - Image
    - Offer
    - Name
    - Rating
    - Description

# Footer
  - Logo
  - Copyright


# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ REDUX - start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# STEP 1 : create appStore.js

import { configureStore } from "@reduxjs/toolkit";
const appStore = configureStore({});
export default appStore;

# STEP 2 : create provider and wrap it around our app

import { Provider } from 'react-redux';
import appStore from './components/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

# STEP 3 : create a slice

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

# STEP 4 : Dispatch an action

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const MenuCategory = ({ category }) => {

    const dispatch = useDispatch();

    const addToCart = (cardInfo) => {
        console.log(cardInfo);
        dispatch(addItem(cardInfo));
    }

}

# STEP 5 : Subcribe to store

import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);




# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ REDUX - end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ REDUX - SAGA

STEP 1 : install redux saga => npm i redux-saga
STEP 2 :
STEP 3 : create restaurantSlice.js
STEP 4 : 


DR DRR
9949999499