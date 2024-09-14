import { useLoaderData } from "react-router-dom";



const Each_Blog = () => {
    const blog = useLoaderData();
    console.log(blog.comments)
    const dateObj = new Date(blog.postDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-7xl mx-auto">
            <div className=" pb-6">
                <div className="relative shadow-md  rounded-l-3xl">
                    <img className="w-full h-96 rounded-3xl object-cover" src={blog?.img} alt="" />
                    <div className="ml-12">
                        <div className="absolute bottom-0 right-0 ml-56 w-[95%] px-8 rounded-tl-2xl py-4 bg-[#F7F7F7] text-[#7f7f7f] flex justify-between">
                            <div>
                                {
                                    blog?.tags.slice(0, 2).map((tag, idx) => (
                                        <span key={idx} className="mr-2 border border-[#00AA55] text-[#00AA55] text-sm font-semibold px-2 py-1 rounded-full">{tag}</span>
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
                    <h1 className="text-5xl font-bold">{blog?.title}</h1>
                    <p className="text-[#7f7f7f] text-base">{blog?.description}</p>
                    <hr />
                    <div>
                        {
                            blog?.tags.map((tag, idx) => (
                                <span key={idx} className="mr-2 bg-[#e4e4e4] text-[#00AA55] text-sm font-semibold px-2 py-1 rounded-full">{tag}</span>
                            ))
                        }
                    </div>
                </div>
                {
                    blog?.comments.map((bl, idx) => (
                        <div key={idx} className="border rounded-xl p-4 flex gap-4 items-center mt-4 w-1/2">
                            <div>
                                <img src="https://i.postimg.cc/rwRd9dzG/images.png" alt="" className="w-12 h-12 object-cover rounded-full" />
                            </div>
                            <div>
                                <p className="font-semibold">{bl.username}</p>
                                <p>{bl.comment}</p>
                                <p className="text-sm text-gray-500">{new Date(bl.date).toLocaleDateString()}</p>
                            </div>
                        </div>

                    ))
                }
                

            </div>
        </div>
    );
};

export default Each_Blog;