import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
                loader: () => axios.get("/services").then(response => response.data),
            },
        ]
    },
]);

export default router;