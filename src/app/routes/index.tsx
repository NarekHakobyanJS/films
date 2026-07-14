import { createBrowserRouter } from "react-router-dom";
import { HomePage, FilmPage } from "../../pages";
import { Layout } from "../../widgets/mainLayout";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
        children : [
            {
                index : true,
                element : < HomePage />
            },
            {
                path : '/:id',
                element : <FilmPage />
            },
        ]
    }
])