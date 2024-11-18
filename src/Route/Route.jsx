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
import Cancel from "../Pages/Payment/Cancel";
import Admin_Home from "../Pages/Admin/Admin_Home/Admin_Home";
import PrivateAdminRoute from "./PrivateAdminRoute";
import Add_Service from "../Pages/Admin/Add_Service/Add_Service";
import Add_Blog from "../Pages/Admin/Add_Blog/Add_Blog";

axios.defaults.baseURL = "https://device-master-backend.vercel.app";

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
                path: "/cancel",
                element: <Cancel></Cancel>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/admin",
                element: <PrivateAdminRoute><Admin_Home></Admin_Home></PrivateAdminRoute>
            },
            {
                path: "/add_service",
                element: <PrivateAdminRoute><Add_Service></Add_Service></PrivateAdminRoute>
            },
            {
                path: "/add_blog",
                element: <PrivateAdminRoute><Add_Blog></Add_Blog></PrivateAdminRoute>
            }
        ]
    },
]);

export default router;