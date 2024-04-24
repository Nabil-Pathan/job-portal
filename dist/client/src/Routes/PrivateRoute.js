"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
function PrivateRoute({ element }) {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    return (user === null || user === void 0 ? void 0 : user.token) ? element : (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/" });
}
exports.default = PrivateRoute;
