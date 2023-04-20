import { useLoaderData } from "react-router-dom";

import MainHero from "../components/Hero/MainHero";
import ProjectsList from "../components/Projects/ProjectsList";
import Footer from "../components/Footer/Footer";

import { projects } from "../util/data";

const HomePage = function () {
    const projects = useLoaderData();
    // console.log(data);

    return (
        <>
            <MainHero />

            <ProjectsList projects={projects} />

            <Footer />
        </>
    );
};

export default HomePage;

export const loader = async function () {
    // const projects = [
    //     {
    //         id: "tapai-coworking",
    //         title: "Tapai Coworking",
    //         tags: ["Desarrollo Web", "Diseño Web"],
    //         description:
    //             "Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.",
    //         img: "tapai-coworking.png",
    //     },
    //     {
    //         id: "come-y-calla",
    //         title: "Come y Calla",
    //         tags: ["Desarrollo Web", "Diseño Web", "Bases de Datos"],
    //         description:
    //             "Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.",
    //         img: "come-y-calla.png",
    //     },
    //     {
    //         id: "clasificador-distancia-minima",
    //         title: "Clasificador de Distancia Minima",
    //         tags: ["Desarrollo Web", "Algoritmos"],
    //         description:
    //             "Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.",
    //         img: "clasificador-distancia.png",
    //     },
    // ];

    return projects;
};
