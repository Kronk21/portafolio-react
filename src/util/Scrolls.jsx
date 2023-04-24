import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = function () {
    const { pathname } = useLocation();

    // console.log(pathname);

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
        });
    }, [pathname]);

    return null;
};

export const scrollToContact = function () {
    const contactElement = document.querySelector(".footer");

    contactElement.scrollIntoView({ behavior: "smooth" });
};

export const scrollToNavbar = function () {
    const navbarElement = document.querySelector("body");

    navbarElement.scrollIntoView({ behavior: "smooth" });
};
