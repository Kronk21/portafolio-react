import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";

import MainNavigation from "../components/MainNavigation";

const RootPage = function () {
    return (
        <>
            <MainNavigation />

            <Outlet />

            <Footer />
        </>
    );
};

export default RootPage;
