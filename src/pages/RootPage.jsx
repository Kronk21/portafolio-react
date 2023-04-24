import { Outlet, ScrollRestoration } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer/Footer";

import { ScrollToTop } from "../util/Scrolls";

const RootPage = function () {
    return (
        <>
            <MainNavigation />

            <Outlet />

            <Footer />

            <ScrollToTop />
        </>
    );
};

export default RootPage;
