import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <div className="container">
            <Outlet />
            <footer>Footer app</footer>
        </div>
    );
};

export default LayoutPublic;
