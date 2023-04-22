import { useLoaderData } from "react-router-dom";

import { projects } from "../util/data";

import ProjectHero from "../components/Hero/ProjectHero";

const ProjectPage = function () {
    const project = useLoaderData();

    return (
        <>
            <ProjectHero project={project} />
        </>
    );
};

export default ProjectPage;

export const loader = async function ({ params }) {
    // console.log(params);
    // console.log(projects);
    const project = projects.find((pr) => pr.id === params.id);
    // console.log(project);

    return project;
};
