import "./ProjectHero.css";

const ProjectHero = function () {
    return (
        <div className="hero hero--project">
            <div className="hero__wrap">
                <div className="container">
                    <h1>Tapai Coworking</h1>
                    <h2>Descrición</h2>
                    <p className="hero__desc">
                        Full website design and build for a concept team
                        collaboration platform. This website also includes a
                        beautiful blog. I have built the website and the blog in
                        Webflow which has one of the best CMS for blog hosting.
                    </p>
                    <div className="btn-box btn-box--primary">
                        <a className="btn">Ver sitio</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHero;
