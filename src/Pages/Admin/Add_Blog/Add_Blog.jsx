import Heading_Bg from '../../../Components/Heading_Bg/Heading_Bg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add_Blogs() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const tags = form.tags.value;
        const tagsArray = tags.split(",").map(tag => tag.trim())
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append("image", image);

        const responseImgURL = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`, formData);
        if (responseImgURL.data.success) {
            const imgURL = responseImgURL.data.data.url;
            const data = {
                title, description, tagsArray, imgURL
            }
            axios.post("/add_blogs", data)
                .then(res => {
                    if (res.data.insertedId) {
                        navigate("/blogs");
                    }
                })
        } else {
            console.error("Image upload failed:", responseImgURL.data.error.message);
        }
    };

    return (
        <div>
            <Heading_Bg name={"Blog"} />

            <div className='mx-auto max-w-7xl mt-4'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h3 className="font-bold text-lg">Title</h3>
                            <input type="text" placeholder="Title..." className="input input-bordered border-gray-400 w-full bg-[#F4F6F6]" name='title' />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Description</h3>
                            <textarea className="textarea textarea-bordered bg-transparent border-gray-400 w-full text-base h-56" placeholder="Description..." name='description'></textarea>
                        </div>
                        <div>
                            <div>
                                <h3 className="font-bold text-lg">Tags</h3>
                                <input type="text" placeholder="Tag-1, Tag-2..." className="input input-bordered border-gray-400 w-full bg-[#F4F6F6]" name='tags' />
                            </div>
                        </div>
                        <div>
                            <input type="file" className="file-input file-input-bordered w-full border-gray-400 bg-[#F4F6F6] max-w-xs mt-2" name='image' />
                        </div>

                    </div>
                    <div className='flex justify-center mb-4'>
                        <button className="btn border-none outline-none " >Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Add_Blogs;
