// SAGA 5
import { call, put, takeEvery } from 'redux-saga/effects';
import { getRestaurantsSuccess } from '../redux/restaurantSlice';

function* workGetRestaurantsFetch() {
    // const restaurants = yield call(() => fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5294194&lng=78.47596720000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'));
    //Getting data from firebase realtime database
    const restaurants = yield call(() => fetch('https://food2go-10636-default-rtdb.firebaseio.com/data/cards.json'));
    const formattedRestaurants = yield restaurants.json();
    yield put(getRestaurantsSuccess(formattedRestaurants));
}

function* restaurantSaga() {
    yield takeEvery('restaurants/getRestaurants', workGetRestaurantsFetch);
}

export default restaurantSaga;