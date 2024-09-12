import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import axios from "axios";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

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
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
        ]
    },
]);

export default router;