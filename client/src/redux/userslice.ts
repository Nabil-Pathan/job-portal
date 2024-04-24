import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user: null | { _id: string, name: string, email: string , pic : string, token: string , savedJobs : string[] }; // Define your user state here
}

const userInfoString = localStorage.getItem('userInfo');

const initialState: UserState = {
    user: userInfoString ? JSON.parse(userInfoString) : null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ _id: string, name: string, email: string, pic : string, token: string  ,savedJobs : string[]}>) {
            state.user = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        clearUser(state) {
            state.user = null;
            localStorage.removeItem('userInfo');
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
