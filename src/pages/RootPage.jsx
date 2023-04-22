import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer/Footer";

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
