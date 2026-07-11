import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path : '/',
        element : '<>Layout</>',
        children : [
            {
                index : true,
                element : "<>hoome </>"
            },
            {
                path : '/:id',
                element : "<>Films </>"
            },
        ]
    }
])