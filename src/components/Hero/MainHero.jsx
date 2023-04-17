import "./MainHero.css";

const MainHero = function () {
    return (
        <div className="hero hero--main">
            <div className="hero__wrap">
                <div className="container">
                    <h2>Desarrollador y Diseñador Web</h2>
                    <h1>
                        ¡Hola! <br></br>Soy Cesar Serrano
                    </h1>
                    <p className="hero__desc">
                        Diseño y construyo experiencias de usuarios geniales
                        para cualquier negocio. Si necesitas un sitio moderno y
                        poderoso, enviame un correo. Si estamos en sintonia, te
                        dare un tiempo y costo estimado (~_^).
                    </p>
                    <div className="btn-box btn-box--primary">
                        <a className="btn">Contactame</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHero;
