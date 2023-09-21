//SAGA 6
import { createSlice } from "@reduxjs/toolkit"

const restaurantSlice = createSlice({
    name: "restaurants",
    initialState: {
        restaurants: [],
        isLoading: false
    },
    reducers: {
        getRestaurants: (state) => {
            state.isLoading = true;
        },
        getRestaurantsSuccess: (state, action) => {
            state.restaurants = action.payload;
            state.isLoading = false;
        },
        getRestaurantsFailure: (state) => {
            state.isLoading = false;
        },
    }

});

export const { getRestaurants, getRestaurantsSuccess, getRestaurantsFailure } = restaurantSlice.actions;
export default restaurantSlice.reducer;