import { useEffect } from 'react';
import Body from '../components/Body/Body';
import Header from '../components/header/Header';
import Home from '../components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { addUser, removeUser } from '../redux/userSlice';
import CartDetails from '../components/Body/CartDetails';
import RestaurantMenuDetails from '../components/Body/RestaurantMenuDetails';

const Container = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/container',
            element: <><Header /><Body /></>
        },
        {
            path: "/foodDetails/:resId",
            element: <><Header /><RestaurantMenuDetails /></>
        },
        {
            path: "/cartDetails",
            element: <><Header /><CartDetails /></>
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

            } else {
                dispatch(removeUser);
            }
        });
    }, [])

    return (
        <div style={{ backgroundColor: "rgb(36, 36, 62)", color: "white" }}>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Container;