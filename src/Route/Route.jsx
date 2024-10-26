import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import axios from "axios";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Each_Service from "../Pages/Each_Service/Each_Service";
import Blogs from "../Pages/Blogs/Blogs";
import Each_Blog from "../Pages/Each_Blog/Each_Blog";
import Contact from "../Pages/Contact/Contact";
import Payment from "../Pages/Payment/Payment";

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
                path: "/services/:id",
                element: <Each_Service></Each_Service>,
                loader: ({ params }) => axios.get(`/service/${params.id}`).then(response => response.data),
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                // loader: () => axios.get(`/blogs`).then(response => response.data),
            },
            {
                path: "/blogs/:id",
                element: <Each_Blog></Each_Blog>,
                // loader: ({ params }) => axios.get(`/blogs/${params.id}`).then(response => response.data),
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
                // loader: () => axios.get(`/blogs`).then(response => response.data),
            },
            {
                path: "/success/:id",
                element: <Payment></Payment>,
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