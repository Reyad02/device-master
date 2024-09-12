// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const CommentSection = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.postimg.cc/yNc2JcCD/abstract-forest-green-colour-rhombus-pattern-background-banner-multipurpose-design-1340-17103.avif)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content  w-full flex items-start justify-start text-left">
                            <div className="max-w-4xl ">
                                <p className=' text-[#00A452] mb-2'>Client Stories</p>
                                <h1 className="mb-5 text-5xl font-bold text-white">Trusted by Thousands of Satisfied Customers
                                </h1>
                                <p className="mb-5 ">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint labore ex facere, provident animi expedita excepturi, quaerat cum eum voluptate nisi soluta sequi molestiae aliquid eos nobis aliquam consequatur, quidem id repellat vitae fuga quia? Eligendi hic autem, at, consequuntur unde dolores nesciunt repellendus accusantium esse aut reiciendis iusto aspernatur.
                                </p>
                                <hr />
                                <div className='mt-8'>
                                    <div className='flex items-center justify-start gap-4'>
                                        <img style={{ width: '80px', height: 'auto', borderRadius: '9999px' }} src="https://i.postimg.cc/rmhjzwsd/lloyd-sikeba.jpg" alt="Description of the image" />
                                        <div>
                                            <p className='text-[#00A452] text-lg'>Mark Henry</p>
                                            <p className='text-base'>Hardware Technician</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.postimg.cc/yNc2JcCD/abstract-forest-green-colour-rhombus-pattern-background-banner-multipurpose-design-1340-17103.avif)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content  w-full flex items-start justify-start text-left">
                            <div className="max-w-4xl ">
                                <p className=' text-[#00A452] mb-2'>Client Stories</p>
                                <h1 className="mb-5 text-5xl font-bold text-white">Trusted by Thousands of Satisfied Customers
                                </h1>
                                <p className="mb-5 ">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint labore ex facere, provident animi expedita excepturi, quaerat cum eum voluptate nisi soluta sequi molestiae aliquid eos nobis aliquam consequatur, quidem id repellat vitae fuga quia? Eligendi hic autem, at, consequuntur unde dolores nesciunt repellendus accusantium esse aut reiciendis iusto aspernatur.
                                </p>
                                <hr />
                                <div className='mt-8'>
                                    <div className='flex items-center justify-start gap-4'>
                                        <img style={{ width: '80px', height: '80px', borderRadius: '9999px' }} src="https://i.postimg.cc/76Q1wtt0/depositphotos-13720689-stock-photo-young-businesswoman.webp" alt="Description of the image" />
                                        <div>
                                            <p className='text-[#00A452] text-lg'>Alex Shayna</p>
                                            <p className='text-base'>Mobile Technician</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.postimg.cc/yNc2JcCD/abstract-forest-green-colour-rhombus-pattern-background-banner-multipurpose-design-1340-17103.avif)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content  w-full flex items-start justify-start text-left">
                            <div className="max-w-4xl ">
                                <p className=' text-[#00A452] mb-2'>Client Stories</p>
                                <h1 className="mb-5 text-5xl font-bold text-white">Trusted by Thousands of Satisfied Customers
                                </h1>
                                <p className="mb-5 ">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint labore ex facere, provident animi expedita excepturi, quaerat cum eum voluptate nisi soluta sequi molestiae aliquid eos nobis aliquam consequatur, quidem id repellat vitae fuga quia? Eligendi hic autem, at, consequuntur unde dolores nesciunt repellendus accusantium esse aut reiciendis iusto aspernatur.
                                </p>
                                <hr />
                                <div className='mt-8'>
                                    <div className='flex items-center justify-start gap-4'>
                                        <img style={{ width: '80px', height: '80px', borderRadius: '9999px' }} src="https://i.postimg.cc/qv8GyLgH/360-F-302884605-actpip-Od-POQHDTn-Ftp4zg4-Rtl-Wzh-OASp.jpg" alt="Description of the image" />
                                        <div>
                                            <p className='text-[#00A452] text-lg'>Robert William</p>
                                            <p className='text-base'>Mobile Technician</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CommentSection;