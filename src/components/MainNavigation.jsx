import { useState } from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

import { scrollToContact } from "../util/Scrolls";

const MainNavigation = function () {
    const [navbarIsShowing, setNavbarIsShowing] = useState(false);

    return (
        <header className={`${navbarIsShowing ? "show" : ""}`}>
            <div className="container">
                <Link to="/" className="logo">
                    Cs<span>.dev</span>
                </Link>

                <ul className="navbar__links">
                    <li>
                        <Link to="/acerca-de" className="navbar__link">
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <a onClick={scrollToContact} className="navbar__link">
                            Contacto
                        </a>
                    </li>
                </ul>

                <button
                    className="btn-menu"
                    onClick={() => {
                        setNavbarIsShowing((previousState) => !previousState);
                    }}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </header>
    );
};

export default MainNavigation;
