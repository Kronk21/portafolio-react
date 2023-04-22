import { Link } from "react-router-dom";

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
                    <Link className="btn" to={`/proyectos/${props.id}`}>
                        Ver proyecto
                    </Link>
                </div>
            </div>

            <div className="preview__img">
                <img src={`/images/${props.img}`} alt="" />
            </div>
        </li>
    );
};

export default ProjectPreview;
