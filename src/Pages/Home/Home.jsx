import Card from '../../Components/Card/Card';
import Hero from '../../Components/Hero/Hero';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Parallax } from 'react-parallax';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Expertise from '../../Components/Expertise/Expertise';
import CommentSection from '../../Components/CommentSection/CommentSection';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const Home = () => {
    const [services, setServices] = useState([]);

    const insideStyles = {
        padding: 20,
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };

    useEffect(() => {
        AOS.init();
        axios.get("/services").then(res => setServices(res.data))
    }, []);

    return (
        <div >
            <div className='-z-10'>
                <Hero></Hero>
            </div>
            <div className='mt-16 '>
                <p className='text-center text-lg text-[#00A452] mb-4'>Our services</p>
                <h1 className=' mx-auto text-center max-w-2xl text-5xl text-black mb-12'>Fast and Reliable Repairs for Every Need</h1>
                <div data-aos="fade-right" className='max-w-7xl mx-auto'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper">
                        {
                            services.map((service) => (
                                <SwiperSlide key={service._id}>
                                    <Card name={service.service_name} overview={service.description} logo={"https://i.postimg.cc/9F3v7FQK/icon-7.png"} img={service.service_img} />
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                </div>
            </div>

            <div className='mt-32'>
                <div
                    className="hero min-h-screen w-full"
                    style={{
                        backgroundImage: "url(https://i.postimg.cc/SQXzGRsv/pngtree-abstract-gradient-crystal-texure-background-in-dark-green-color-image-671444.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60 pb-16"></div>
                    <div className="hero-content max-w-full text-white text-center flex flex-col justify-start items-start ">
                        <div className=" flex lg:flex-row lg:items-center flex-col justify-center">
                            <div data-aos="zoom-in-up" className='lg:text-left flex-1 lg:mr-12 lg:ml-4 text-center space-y-4'>
                                <p className='text-lg text-[#00A452]'>Protection</p>
                                <h1 className="mb-5 text-5xl font-bold">Ultimate Shield for Your Device</h1>
                            </div>
                            <div className='relative flex-1'>
                                <img className='' src="https://i.postimg.cc/zvpMB7gx/mobile-back-img.png" alt="" />
                                <img className='absolute lg:top-0 lg:left-20 z-50 top-20' src="https://i.postimg.cc/0yh4bbz1/mobile-4.png" alt="" />
                            </div>
                            <div className='flex-1 flex flex-col lg:ml-16 mt-32 lg:mt-0 space-y-4 '>
                                <h1 data-aos="fade-up" className='text-3xl'>How to Save Your Gadget?</h1>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-[#00A452]'><FaCheckCircle /></span> <p>Invest in a quality phone case to protect device.</p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-[#00A452]'><FaCheckCircle /></span> <p>Set up a strong password or biometric lock.</p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-[#00A452]'><FaCheckCircle /></span> <p>Saving Your Phone from Theft.</p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-[#00A452]'><FaCheckCircle /></span> <p> Only download apps and files from trusted sources.
                                </p></div>
                                <div data-aos="fade-up" className='flex gap-2 items-center lg:ml-12 text-base'><span className='text-[#00A452]'><FaCheckCircle /></span> <p>  Disable Bluetooth, Wi-Fi, and GPS when not in use.
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-32 max-w-7xl mx-auto mb-8'>
                <p className=' text-[#00A452]'>About Us</p>
                <div className='flex mt-8 gap-16'>
                    <h1 className='text-5xl font-bold w-[40%]'>Get Solution for All Electric Devices</h1>
                    <p className='text-[#7F7F7F] text-base w-[60%]'>At devicemaster, we are a team of highly skilled technicians with years of experience in the tech repair industry. Our expertise covers a broad spectrum of devices, including laptops, desktops, smartphones, tablets, and more.</p>
                </div>
            </div>

            <div className='max-w-7xl ml-auto mb-24'>
                <Parallax className='rounded-l-2xl' bgImage={"https://i.postimg.cc/cJNzwCm6/KIdo-Du-ZPTc76-WW6-Ibf-Xa-Ej-V3-M1-Wk-E0-metacn-Rj-IG1v-Ymls-ZSBzb2x1d-Glvbn-Mud2-Vic-A.webp"} strength={500}>
                    <div style={{ position: "relative", height: 500 }}>
                        {/* Black Shade/Overlay */}
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)" // Adjust the opacity for desired darkness
                        }}></div>

                        {/* Content inside the parallax */}
                        <div className=' text-white text-lg' style={insideStyles}>
                            <div className='flex items-center'>___________
                                <div className='ml-4 flex items-center'>
                                    <FaStar className='text-[#00A452]' />
                                    <FaStar className='text-[#00A452]' />
                                    <FaStar className='text-[#00A452]' />
                                    <FaStar className='text-[#00A452]' />
                                    <FaStarHalfAlt className='text-[#00A452] ' />
                                </div>
                            </div>
                            <p className='max-w-96  ml-32'> Our expertise covers a broad spectrum of devices laptops, desktops, smartphones, tablets, and more..</p>
                        </div>
                    </div>
                </Parallax>
            </div>

            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-3'>
                    <Expertise name={"Skilled Technicians"} description={"Our team comprises skilled professionals with extensive training & certifications."} />
                    <Expertise name={"10+ Years Experiences"} description={"Work with the client to set short-term and long-term financial goals."} />
                    <Expertise name={"Quality Guarantee"} description={"Work with the client to set short-term and long-term financial goals."} />
                </div>
            </div>

            <div className='mt-24'>
                <CommentSection></CommentSection>
            </div>

        </div>
    );
};

export default Home;