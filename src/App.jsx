import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import { loader as projectsLoader } from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import { loader as projectLoader } from "./pages/ProjectPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: projectsLoader,
            },
            {
                path: "/acerca-de",
                element: <AboutPage />,
            },
            {
                path: "/proyectos/:id",
                element: <ProjectPage />,
                loader: projectLoader,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
