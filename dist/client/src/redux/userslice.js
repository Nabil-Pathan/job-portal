"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUser = exports.setUser = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const userInfoString = localStorage.getItem('userInfo');
const initialState = {
    user: userInfoString ? JSON.parse(userInfoString) : null,
};
const userSlice = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        clearUser(state) {
            state.user = null;
            localStorage.removeItem('userInfo');
        },
    },
});
_a = userSlice.actions, exports.setUser = _a.setUser, exports.clearUser = _a.clearUser;
exports.default = userSlice.reducer;
