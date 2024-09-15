import BlogsCard from "../../Components/BlogsCard/BlogsCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const items = 3;
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const handleNext = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        axios.get(`/blogs/${items}/${page}`).then(response => {
            setBlogs(response.data.result)
            setTotalPage(Math.ceil(response.data.totalCount / items))
        })
    }, [page])
    return (
        <div className="max-w-5xl mx-auto my-12">
            <div className="flex flex-col gap-12">
                {
                    blogs.map((blog) => (
                        <BlogsCard key={blog._id} blog={blog} id={blog._id} title={blog.title} tags={blog.tags} img={blog.img} description={blog.description} postDate={blog.postDate} ></BlogsCard>
                    ))
                }
            </div>
            <div className="flex justify-center mt-8">
                <div className="join grid grid-cols-2">
                    <button onClick={handlePrev} className="join-item btn btn-outline text-[#7f7f7f] hover:text-white hover:bg-[#00AA55] border border-[#00AA55]" disabled={page === 1}>Previous</button>
                    <button onClick={handleNext} className="join-item btn btn-outline text-[#7f7f7f] hover:text-white hover:bg-[#00AA55] border border-[#00AA55]" disabled={page === totalPage}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;