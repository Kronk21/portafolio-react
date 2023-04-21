import { Link } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = function () {
    return (
        <header>
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
                        <a className="navbar__link">Contacto</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default MainNavigation;
