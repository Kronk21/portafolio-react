import "./ProjectsList.css";

import ProjectPreview from "./ProjectPreview";

const ProjectsList = function (props) {
    // console.log(props.projects.map((pr) => pr.id));

    return (
        <div className="projects-list">
            <div className="wrap">
                <div className="container">
                    <h2>Proyectos destacados</h2>

                    <ul className="list">
                        {props.projects.map((project) => (
                            <ProjectPreview
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                tags={project.tags}
                                description={project.description}
                                img={project.img}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;
