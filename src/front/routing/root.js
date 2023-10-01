import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "../components/navbar.jsx";
import { OffCanvas } from "../components/offCanvas.jsx";
import { Modal } from "../components/modal.jsx";


function Root() {
    return(
        <div>
            <NavBar />
            <OffCanvas />
            <Modal />
            <Outlet />
        </div>
    )
}

export default Root;