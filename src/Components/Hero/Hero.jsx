import Lottie from 'lottie-react';
import circuitAnimation from '/public/Animation - 1725866095000.json';
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';
import { Pagination } from 'swiper/modules';


const Hero = () => {

    return (
        <div className='-z-10'>
            <div className='h-screen -z-10'>
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <div className="relative w-full h-[100vh] overflow-hidden">
                            <Lottie
                                animationData={circuitAnimation}
                                loop={true}
                                autoplay={true}
                                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundColor: "#0A211B" }}
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-75 z-10">
                                <h1 className="mb-5 text-xl font-semibold uppercase max-w-4xl text-[#00A452]">
                                    Your device, our expertise
                                </h1>
                                <h1  className="mb-5 lg:text-6xl md:text-4xl text-3xl font-semibold max-w-4xl lg:text-left text-center">
                                    Tech Rescuers, Saving Your Devices and Your Day
                                </h1>

                            </div>

                            <div className="hidden absolute left-0 bottom-0 lg:flex flex-col items-start justify-end px-6 py-8 text-white bg-[#00A452] bg-opacity-20 rounded-tr-3xl z-10 ">
                                <div className='flex gap-8'>
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> IT Devices Repaired</p>
                                    /
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> Genuine Products</p>
                                    /
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> Certified Technicians</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[100vh] overflow-hidden">
                            {/* Lottie Animation Background */}
                            <Lottie
                                animationData={circuitAnimation}
                                loop={true}
                                autoplay={true}
                                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundColor: "#0A211B" }}
                            />
                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-75 z-10">
                                <h1 className="mb-5 text-xl font-semibold uppercase max-w-4xl text-[#00A452]">
                                    Professional device Services
                                </h1>
                                <h1 className="mb-5 text-6xl font-semibold max-w-4xl text-left">
                                    Experienced Computer and Mobile Care Rescuers
                                </h1>

                            </div>

                            <div className="absolute left-0 bottom-0 flex flex-col items-start justify-end px-6 py-8 text-white bg-[#00A452] bg-opacity-20 rounded-tr-3xl z-10 ">
                                <div className='flex gap-8'>
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> IT Devices Repaired</p>
                                    /
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> Genuine Products</p>
                                    /
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> Certified Technicians</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[100vh] overflow-hidden">
                            {/* Lottie Animation Background */}
                            <Lottie
                                animationData={circuitAnimation}
                                loop={true}
                                autoplay={true}
                                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundColor: "#0A211B" }}
                            />
                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white bg-black bg-opacity-75 z-10">
                                <h1 className="mb-5 text-xl font-semibold uppercase max-w-4xl text-[#00A452]">
                                    Dead Phone Back to Life
                                </h1>
                                <h1 className="mb-5 text-6xl font-semibold max-w-4xl text-left">
                                    Your Device Deserve The Best Repair Service
                                </h1>

                            </div>

                            <div className=" absolute left-0 bottom-0 flex flex-col items-start justify-end px-6 py-8 text-white bg-[#00A452] bg-opacity-20 rounded-tr-3xl z-10  ">
                                <div className='flex gap-8'>
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> IT Devices Repaired</p>
                                    /
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> Genuine Products</p>
                                    /
                                    <p className='flex gap-2 items-center'><span className=' text-[#00A452]'><FaCheckCircle /></span> Certified Technicians</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Hero;