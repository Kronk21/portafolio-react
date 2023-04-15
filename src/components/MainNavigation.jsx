import "./MainNavigation.css";

const MainNavigation = function () {
    return (
        <header>
            <div className="container">
                <p className="logo">
                    Cs<span>.dev</span>
                </p>

                <ul className="navbar__links">
                    <li>
                        <a className="navbar__link">Proyectos</a>
                    </li>
                    <li>
                        <a className="navbar__link">Acerca de</a>
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
