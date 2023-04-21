import "./AboutInfo.css";

const AboutInfo = function () {
    return (
        <section className="about-section">
            <div className="wrap">
                <div className="container--small">
                    <div className="about__paragraph">
                        <p>
                            Soy Cesar Serrano, diseñador web y apasionado por la
                            programacion. Me gusta resolver y crear aplicaciones
                            que generen experiencias inolvidables. Me gradue de
                            la Universidad Autonoma del Estado de Hidalgo en el
                            area de Ciencias Computacionales.
                        </p>

                        <p>
                            Resuelvo problemas investigando, testeando y
                            comunicando con empatia, creo que trabajando de esta
                            manera los resultados seran soluciones exitosas y
                            positivas para los usuarios.
                        </p>

                        <p>
                            Disfruto trabajar con personas en multiples
                            disciplinas porque me permite aprender y aplicar
                            metodos interdisciplinares a la resolucion de
                            desafios.
                        </p>

                        <p>
                            En mi tiempo libre practico guitarra, soy un gran
                            fanatico de la lucha libre y fubol. Si quieres
                            contactarme enviame un correo a
                            CesarAxel001@gmail.com o enviame un mensaje a 771
                            359 7174.
                        </p>
                    </div>

                    <h2>Habilidades y Herramientas</h2>
                    <div className="about__block">
                        <ul className="about__list">
                            <li>• HTML</li>
                            <li>• CSS</li>
                            <li>• JavaSript</li>
                            <li>• PHP</li>
                            <li>• MySQL</li>
                        </ul>
                        <ul className="about__list">
                            <li>• React</li>
                            <li>• Laravel</li>
                            <li>• Figma</li>
                            <li>• GitHub</li>
                            <li>• Git</li>
                        </ul>
                    </div>

                    <h2>Idiomas</h2>
                    <ul className="about__list">
                        <li>• Español</li>
                        <li>• Ingles</li>
                    </ul>

                    <h2>Educación</h2>
                    <ul className="about__list">
                        <li>
                            • Universidad Autónoma del Estado de Hidalgo.
                            Hidalgo, México
                        </li>
                        <li>Licenciatura en Ciencias Computacionales</li>
                    </ul>

                    <h2>Datos de Contacto</h2>
                    <ul className="about__list">
                        <li>
                            Email: <span>CesarAxel001@gmail.com</span>
                        </li>
                        <li>
                            Número telefónico: <span>771 359 7174</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutInfo;
