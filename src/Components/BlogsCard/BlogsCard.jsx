import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const BlogsCard = ({img, title, tags, description, postDate, id }) => {
    const dateObj = new Date(postDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className="border rounded-3xl pb-6 ">
            <div className="relative shadow-md  rounded-l-3xl">
                <img className="w-full h-96 rounded-3xl object-cover" src={img} alt="" />
                <div className="ml-12">
                    <div className="absolute bottom-0 right-0 ml-56 w-[95%] px-8 rounded-tl-2xl py-4 bg-[#F7F7F7] text-[#7f7f7f] flex justify-between">
                        <div>
                            {
                                tags.slice(0,2).map((tag, idx)=>(
                                    <span key={idx} className="mr-2 bg-[#e4e4e4] text-[#00AA55] text-sm font-semibold px-2 py-1 rounded-full">{tag}</span>
                                ))
                            }
                        </div>
                        <div>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 space-y-4 px-8">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-[#7f7f7f] text-base">{description?.length > 300 ? description?.slice(0,300)+"..." : description }</p>
                <hr />
                <div className="flex justify-between">
                    <Link to={`/blogs/${id}`} className="text-[#00AA55] flex items-center font-medium hover:text-green-700">READ MORE <GoArrowUpRight className="text-lg"/></Link>
                    <div className="flex gap-2">
                        <button className="btn btn-circle btn-sm bg-[#d0d0cf] outline-none border-none hover:bg-[#00AA55]"><FaFacebook className="text-base hover:text-white"/></button>
                        <button className="btn btn-circle btn-sm bg-[#d0d0cf] outline-none border-none hover:bg-[#00AA55]"><FaInstagram className="text-base hover:text-white"/></button>
                        <button className="btn btn-circle btn-sm bg-[#d0d0cf] outline-none border-none hover:bg-[#00AA55]"><FaXTwitter className="text-base hover:text-white"/></button>
                        <button className="btn btn-circle btn-sm bg-[#d0d0cf] outline-none border-none hover:bg-[#00AA55]"><FaLinkedin className="text-base hover:text-white"/></button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogsCard;