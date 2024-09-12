import { useEffect } from "react";
import { CiCircleCheck } from "react-icons/ci";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Expertise = ({ name, description }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-right" className="w-96 ">
            <div className="flex  gap-4 items-center">
                <CiCircleCheck className="text-5xl hover:text-[#00A452]" />
                <div>
                    <p className=" text-2xl">{name}</p>
                </div>
            </div>
            <p  className="ml-16 text-base text-[#7F7F7F]">{description}
            </p>

        </div>
    );
};

export default Expertise;