import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ShowNavbar = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        if (location.pathname.includes('/chat/')) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, [location]);

    return (
        <div>{showNavbar && children}</div>
    );
};

export default ShowNavbar;
