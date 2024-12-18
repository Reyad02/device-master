// import { Link } from "react-router-dom";
import { useContext, useState } from "react";
// import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Registration = () => {
    const [error, setError] = useState(null);
    const { registration, googleLogin, facebookLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        registration(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name, photoURL: "https://e7.pngegg.com/pngimages/670/509/png-clipart-avatar-female-girls-avatar-purple-face.png"
            }).then(() => {
            }).catch((error) => {
            });
            setError(null);
            navigate(location?.state ? location?.state : "/")
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleGoogleLogin = () => {
        googleLogin().then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setError(null);
            // if (location?.state == "/admin") {
            //     navigate("/")
            // } else {
            //     navigate(location?.state ? location?.state : "/")
            // }

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleFacebookLogin = () => {
        facebookLogin().then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setError(null);
            // if (location?.state == "/admin") {
            //     navigate("/")
            // } else {
            //     navigate(location?.state ? location?.state : "/")
            // }

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-8">
                <Helmet>
                    <title>Device Master - Signup</title>
                </Helmet>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse  w-full  rounded-xl ">
                        <div className="flex justify-center  ">
                            <img src="https://i.postimg.cc/14x5G7Q1/istockphoto-871927176-612x612.jpg" className="rounded-lg" alt="Bus Image" />
                        </div>
                        <div className="card pb-4 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-3xl font-bold text-center my-4 text-[#15803D]">Sign Up</h1>
                            <form className="card-body pb-2 pt-0" onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-black">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered bg-white border border-[#7f7f7f]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered bg-white border border-[#7f7f7f]" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-black">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="******" className="input input-bordered bg-white border border-[#7f7f7f]" required />
                                </div>
                                <p className="text-red-600 text-sm">{error ? "Please use correct information" : ""}</p>
                                <div className="form-control mt-2">
                                    <button className="btn bg-[#15803D] text-white outline-none border-none">Sign Up</button>
                                </div>
                            </form><div className="px-8">
                                <div className="divider my-0  "></div>
                            </div>
                            <div className="flex justify-center gap-2">
                                <button className="btn btn-circle text-[#15803D] bg-white border border-[#15803D]" onClick={handleGoogleLogin}>
                                    <FaGoogle />
                                </button>
                                <button className="btn btn-circle text-[#15803D] bg-white border border-[#15803D] text-lg" onClick={handleFacebookLogin}>
                                    <FaMeta />
                                </button>
                            </div>
                            <div className="mx-8 mt-4">
                                <Link to={"/login"} className="btn bg-white text-[#15803D] border border-[#15803D] w-full hover:text-white">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;