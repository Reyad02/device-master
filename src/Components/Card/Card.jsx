import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Card = ({ name, overview, logo, img }) => {
    return (
        <div>
            <div className="card bg-white lg:w-96 shadow-xl">
                <figure className="px-8 pt-8 ">
                    <img className="rounded-lg"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex gap-4">
                        <div className="bg-[#F9F7F5]  rounded-lg p-2">
                            <img className="rounded-lg"
                                src={logo}
                                alt="Shoes" />
                        </div>
                        <p>{overview}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <Link className="flex font-medium items-center gap-1 text-[#00A452]">READ MORE <GoArrowUpRight /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;