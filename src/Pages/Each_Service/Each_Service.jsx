import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Heading_Bg from "../../Components/Heading_Bg/Heading_Bg";
import { FaSquare } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";
// import CheckForm from "../Payment/CheckForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Each_Service = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const currentLocation = location.pathname;


    useEffect(() => {
        AOS.init();
    }, []);

    const handleForm = async (e) => {
        e.preventDefault();
        if (user) {
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const price = form.price.value;
            const message = form.message.value;
            const paymentStatus = false
            const service_name = service.service_name
            const data = { name, email, phone, price, message, paymentStatus, service_name }

            const response = await axios.post("/order", data);
            const session = response.data;

            const stripe = await stripePromise;
            await stripe.redirectToCheckout({ sessionId: session.id });
        } else {
            navigate("/login", { state: { from: currentLocation } })
        }


    }
    return (
        <div>
            <Helmet>
                <title>Device Master - {service?.service_name}</title>
            </Helmet>
            <Heading_Bg name={service.service_name}></Heading_Bg>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center my-12">
                    <div className=" lg:w-1/3 card bg-white pb-4 pt-8  shrink-0 shadow-2xl">
                        <span className="text-lg font-semibold ml-9 mb-2 ">Book a Consultation:</span>
                        <form className="card-body pb-2 pt-0 space-y-4" onSubmit={handleForm}>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered bg-[#F4F6F6] text-base" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" defaultValue={user ? `${user.email} ` : ""} className="input input-bordered bg-[#F4F6F6] text-base" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" placeholder="Phone" className="input input-bordered bg-[#F4F6F6] text-base" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="price" defaultValue={`$${service.price}`} readOnly className="input input-bordered bg-[#F4F6F6] text-base" required />
                            </div>
                            <div className="form-control">
                                <textarea name="message" className="textarea bg-[#F4F6F6]  input-bordered text-base " placeholder="Message"></textarea>
                            </div>

                            <div className="form-control mt-2">
                                <button className="btn bg-[#15803D] text-white outline-none border-none w-fit" >Send Now</button>
                            </div>
                        </form>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <figure className="relative">
                            <img className="rounded-xl w-full h-[500px] object-cover"
                                src={service.service_img}
                                alt="Shoes" />
                            <div className="absolute bg-black z-10 inset-0 opacity-30 rounded-xl"></div>
                        </figure>
                    </div>
                </div>
                <div data-aos="fade-up" className="my-8 space-y-3">
                    <h1 className="text-5xl font-semibold">We give you complete all control</h1>
                    <p className="text-[#7f7f7f] text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odit error veritatis libero ratione cupiditate aperiam at. Porro aliquam unde, aspernatur quidem assumenda eius iste. Accusamus voluptate qui non. Fugiat ex, mollitia officia fugit voluptatibus molestias quo fuga, veritatis consectetur excepturi facilis cum doloribus laboriosam labore quisquam esse? Ipsam harum, nobis, deserunt unde cumque fuga atque vitae expedita culpa id, quas ipsum! Itaque fugit culpa nam odit mollitia sed repellat sit, ipsa nemo necessitatibus qui ratione soluta recusandae magnam, exercitationem pariatur obcaecati deserunt, quaerat magni ab laudantium rerum doloremque cumque. Quam, vel praesentium cumque facere eum quibusdam neque numquam recusandae quas maiores ad obcaecati aliquid repellendus sunt, voluptatem repellat nisi. Architecto tempora repellendus nesciunt deserunt accusamus facere ratione reprehenderit numquam!</p>
                </div>
                <p className="text-4xl font-semibold mb-4">Essential FAQs for Camera & Lens Repairs</p>
                <div data-aos="fade-up" className="mb-8 space-y-2">
                    <div className="collapse collapse-plus bg-[#F4F6F6] border border-[#7f7f7f]">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Do I need to pay extra for replacement parts?</div>
                        <div className="collapse-content">
                            <p>Yes, if your camera or lens requires new parts for repair, you will need to cover the cost of the parts. We will notify you of any additional charges before proceeding.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#F4F6F6] border border-[#7f7f7f]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium"> Do I need to back up my data before the repair?</div>
                        <div className="collapse-content">
                            <p>Yes, it's highly recommended that you back up your data before bringing your device in for repair. While we handle your device carefully, there is always a small chance that data could be lost during the repair process.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#F4F6F6] border border-[#7f7f7f]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Will I lose any data during the repair</div>
                        <div className="collapse-content">
                            <p>We strive to keep your data intact during the repair process. However, some repairs, especially those involving hardware or software reinstallations, may lead to data loss. Please ensure you have a backup of your important files.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#F4F6F6] border border-[#7f7f7f]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Can you repair water-damaged items?</div>
                        <div className="collapse-content">
                            <p>We do offer water damage repairs; however, the success rate depends on the severity of the damage. We will perform a full diagnostic and provide you with repair options and costs.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-[#F4F6F6] border border-[#7f7f7f]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Is there a warranty on the repairs</div>
                        <div className="collapse-content">
                            <p>Yes, we offer a 3-month warranty on all repairs, covering the specific issue that was fixed. The warranty does not cover any new damage or unrelated issues that arise after the repair.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Each_Service;