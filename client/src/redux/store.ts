import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice'; // Path to your user slice file

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
