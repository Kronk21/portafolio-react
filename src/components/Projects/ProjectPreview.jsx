import "./ProjectPreview.css";

const ProjectPreview = function (props) {
    return (
        <li className="preview">
            <div className="preview__info">
                <div className="info__line"></div>
                <h3>{props.title}</h3>
                <ul className="info__tags">
                    {props.tags.map((tag) => (
                        <li className="tag" key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <p className="info__description">{props.description}</p>
                <div className="btn-box btn-box--secondary">
                    <a className="btn" href={`/proyectos/${props.id}`}>
                        Ver proyecto
                    </a>
                </div>
            </div>

            <div className="preview__img">
                <img src={`/images/${props.img}`} alt="" />
            </div>
        </li>
    );
};

export default ProjectPreview;
