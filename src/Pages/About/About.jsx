import { useLoaderData } from "react-router-dom";
import Person_Card from "../../Components/Person_Card/Person_Card";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Heading_Bg from "../../Components/Heading_Bg/Heading_Bg";

const About = () => {
    const services = useLoaderData();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div >
            <Heading_Bg name={"Our Team"}></Heading_Bg>
            <div className="max-w-7xl mx-auto my-12">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        services.map((service) => (
                            <Person_Card key={service._id} name={service?.service_provider} skills={service?.skills} img={service?.service_provider_img} />
                        ))
                    }
                </div>

                <div className="space-y-3 mt-12">
                    <h1 className="text-5xl font-semibold">Working Experience</h1>

                    <p className="text-[#7f7f7f] text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odit error veritatis libero ratione cupiditate aperiam at. Porro aliquam unde, aspernatur quidem assumenda eius iste. Accusamus voluptate qui non. Fugiat ex, mollitia officia fugit voluptatibus molestias quo fuga, veritatis consectetur excepturi facilis cum doloribus laboriosam labore quisquam esse? Ipsam harum, nobis, deserunt unde cumque fuga atque vitae expedita culpa id, quas ipsum! Itaque fugit culpa nam odit mollitia sed repellat sit, ipsa nemo necessitatibus qui ratione soluta recusandae magnam, exercitationem pariatur obcaecati deserunt, quaerat magni ab laudantium rerum doloremque cumque. Quam, vel praesentium cumque facere eum quibusdam neque numquam recusandae quas maiores ad obcaecati aliquid repellendus sunt, voluptatem repellat nisi. Architecto tempora repellendus nesciunt deserunt accusamus facere ratione reprehenderit numquam!</p>

                    <p className="text-[#7f7f7f] text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi modi odit placeat aspernatur repudiandae natus quibusdam fugiat, eius blanditiis vero repellat nam repellendus facilis non esse enim neque officia cupiditate consequatur maiores rerum. Adipisci itaque ipsum doloribus beatae eligendi accusamus, voluptate explicabo iure illo dolorum officiis architecto reiciendis, molestias repudiandae.</p>
                </div>
            </div>


            <div className=' mb-12'>
                <div
                    className="hero  w-full"
                    style={{
                        backgroundImage: "url(https://i.postimg.cc/SQXzGRsv/pngtree-abstract-gradient-crystal-texure-background-in-dark-green-color-image-671444.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60 pb-16"></div>
                    <div className="hero-content max-w-full text-white text-center flex flex-col justify-start items-start py-16">
                        <div className=" flex lg:flex-row lg:items-center flex-col justify-center">
                            <div data-aos="zoom-in-up" className='lg:text-left flex-1 lg:mr-12 lg:ml-4 text-center space-y-4'>
                                <h1 className="mb-5 text-5xl font-bold">Professional Skills</h1>
                                <div className="flex items-center gap-4">
                                    <span className="bg-success p-2 text-base rounded-full">88%</span>
                                    <div>
                                        <p className="uppercase">Hard Work</p>
                                        <progress className="progress progress-success w-96" value="88" max="100"></progress>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="bg-success p-2 text-base rounded-full">75%</span>
                                    <div>
                                        <p className="uppercase">10 Years of experience</p>
                                        <progress className="progress progress-success w-96" value="75" max="100"></progress>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="bg-success p-2 text-base rounded-full">95%</span>
                                    <div>
                                        <p className="uppercase">Customers Love</p>
                                        <progress className="progress progress-success w-96" value="95" max="100"></progress>
                                    </div>
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col lg:ml-16 mt-32 lg:mt-0 space-y-4 '>
                                <div data-aos="fade-up" className='text-4xl text-left lg:ml-12'>How to Save Your Gadget?</div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-success'><FaCheckCircle /></span> <p>Invest in a quality phone case to protect device.</p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-success'><FaCheckCircle /></span> <p>Set up a strong password or biometric lock.</p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-success'><FaCheckCircle /></span> <p>Saving Your Phone from Theft.</p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-success'><FaCheckCircle /></span> <p> Only download apps and files from trusted sources.
                                </p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-success'><FaCheckCircle /></span> <p>  Disable Bluetooth, Wi-Fi, and GPS when not in use.
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;