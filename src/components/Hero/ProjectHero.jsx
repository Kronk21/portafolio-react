import "./ProjectHero.css";

const ProjectHero = function ({ project }) {
    // console.log(props);

    return (
        <>
            <div className="hero hero--project">
                <div className="hero__wrap">
                    <div className="container">
                        <h1>{project.title}</h1>
                        <h2>Descrición</h2>
                        <p className="hero__desc">{project.description}</p>
                        <div className="btn-box btn-box--primary">
                            <a
                                className="btn"
                                target="_blank"
                                href={project.link}
                            >
                                Ver sitio
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container--medium">
                <img
                    className="project-img-full"
                    src={`/images/${project.img_full}`}
                    alt=""
                />
            </div>
        </>
    );
};

export default ProjectHero;
