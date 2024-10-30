import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add_Service = () => {
    const [file, setFile] = useState(null)
    const [serviceName, setServiceName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [rawImg, setRawImg] = useState(null);
    const navigate = useNavigate();

    const handleButton = async (e) => {
        e.preventDefault();



        const formData = new FormData();
        formData.append("image", rawImg);

        const responseImgURL = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`,formData);
        if (responseImgURL.data.success) {
            const imgURL = responseImgURL.data.data.url;
            const data = {
                serviceName, price, description, imgURL
            }
            axios.post("/add_Service", data)
                .then(res => {
                    if (res.data.insertedId) {
                        navigate("/");
                    }
                })
        } else {
            console.error("Image upload failed:", responseImgURL.data.error.message);
        }
    }
    const handleCancel = () => {
        navigate("/")
    }

    const handleIMG = (e) => {
        setRawImg(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        document.getElementById('my_modal_5').showModal();
    }, [])

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
                <div className="modal-box bg-[#F4F6F6]">
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h3 className="font-bold text-lg">Service Name</h3>
                            <input type="text" placeholder="Name" className="input input-bordered border-gray-400 w-full bg-[#F4F6F6]" onChange={(e) => { setServiceName(e.target.value) }} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Service Description</h3>
                            <textarea className="textarea textarea-bordered bg-transparent border-gray-400 w-full text-base" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }}></textarea>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Service Charge</h3>
                            <input type="number" placeholder="Charge" onChange={(e) => {
                                if (e.target.value < 0) {
                                    e.target.value = 0
                                }
                                setPrice(e.target.value)
                            }} className="input input-bordered border-gray-400 w-full bg-[#F4F6F6]" />
                        </div>
                        <div>
                            <input type="file" className="file-input file-input-bordered w-full border-gray-400 bg-[#F4F6F6] max-w-xs" onChange={handleIMG} />
                            <div className='flex flex-col items-center mt-4'>
                                <img src={file} className={`w-full h-52 object-cover rounded-lg ${file ? 'block' : 'hidden'}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-action justify-center">
                        <form method="dialog ">
                            <button className="btn border-none outline-none mr-4 bg-red-400 text-[#2A323C] hover:text-white" onClick={handleCancel}>Cancel</button>
                            <button className="btn border-none outline-none text-white bg-[#00AA55]" onClick={handleButton}>Save</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Add_Service;