import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ShowFooter = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [showFooter, setshowFooter] = useState(true);

    useEffect(() => {
        if (location.pathname.includes('/chat/')) {
            setshowFooter(false);
        } else {
            setshowFooter(true);
        }
    }, [location]);

    return (
        <div>{showFooter && children}</div>
    );
};

export default ShowFooter;
