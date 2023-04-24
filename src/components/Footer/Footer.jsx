import { Link } from "react-router-dom";

import "./Footer.css";

import { scrollToNavbar } from "../../util/Scrolls";

const Footer = function () {
    return (
        <div className="footer">
            <div className="footer__card">
                <div className="wrap">
                    <div className="container">
                        <h3>Contactame</h3>
                        <p className="card__text">
                            Si necesitas un sitio web moderno y poderoso para tu
                            negocio o para ti, estoy disponible para un trabajo.
                            Puedes enviarme un correo directamente a
                            <span>
                                {" "}
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=CesarAxel001@gmail.com"
                                    target="_blank"
                                >
                                    CesarAxel001@gmail.com
                                </a>
                            </span>
                            , contactarme por medio de mi{" "}
                            <span>
                                <a
                                    href="https://www.instagram.com/cesarserrano21/"
                                    target="_blank"
                                >
                                    Instagram
                                </a>
                            </span>{" "}
                            o enviarme un mensaje al número{" "}
                            <span>
                                {/* 771 359 7174 */}
                                <a
                                    href="https://api.whatsapp.com/send?phone=527713597174"
                                    target="_blank"
                                >
                                    771 359 7174
                                </a>
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer__contact">
                <div className="wrap">
                    <div className="container">
                        <div className="contact__category">
                            <h4>Datos</h4>
                            <ul>
                                <li>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=527713597174"
                                        target="_blank"
                                    >
                                        771 359 7174
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=CesarAxel001@gmail.com"
                                        target="_blank"
                                    >
                                        CesarAxel001@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="contact__category">
                            <h4>Redes</h4>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.instagram.com/cesarserrano21/"
                                        target="_blank"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/cesar-serrano-113597260/"
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/Kronk21"
                                        target="_blank"
                                    >
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="contact__category">
                            <h4>Paginas</h4>
                            <ul>
                                <li>
                                    <Link onClick={scrollToNavbar} to="/">
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/acerca-de">Acerca de</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
