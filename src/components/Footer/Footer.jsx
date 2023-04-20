import "./Footer.css";

const Footer = function () {
    return (
        <div className="footer">
            {/* <div className="contact-wrap">
                <div className="container">
                    <h3>Contactame</h3>
                    <p>
                        Si necesitas un sitio web moderno y poderoso para tu
                        negocio o para ti, estoy disponible para un trabajo.
                        Puedes enviarme un correo directamente a
                        <span>CesarAxel001@gmail.com</span>, o al número{" "}
                        <span>771 359 7174</span>.
                    </p>
                </div>
            </div> */}

            <div className="footer__card">
                <div className="wrap">
                    <div className="container">
                        <h3>Contactame</h3>
                        <p className="card__text">
                            Si necesitas un sitio web moderno y poderoso para tu
                            negocio o para ti, estoy disponible para un trabajo.
                            Puedes enviarme un correo directamente a
                            <span> CesarAxel001@gmail.com</span> o al número{" "}
                            <span>771 359 7174</span>.
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
                                <li>771 359 7174</li>
                                <li>CesarAxel001@gmail.com</li>
                            </ul>
                        </div>

                        <div className="contact__category">
                            <h4>Redes</h4>
                            <ul>
                                <li>
                                    <a>Instagram</a>
                                </li>
                                <li>
                                    <a>LinkedIn</a>
                                </li>
                                <li>
                                    <a>GitHub</a>
                                </li>
                            </ul>
                        </div>

                        <div className="contact__category">
                            <h4>Paginas</h4>
                            <ul>
                                <li>
                                    <a>Inicio</a>
                                </li>
                                <li>
                                    <a>Acerca de</a>
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
