import Heading_Bg from '../../Components/Heading_Bg/Heading_Bg';
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'; 

const Contact = () => {

    return (
        <div>
            <Heading_Bg name={"Contact Us"}></Heading_Bg>
            <div className="max-w-7xl mx-auto px-4 my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="border rounded-md flex gap-8 p-8 hover:border-green-700 hover:shadow-lg items-center">
                        <div className="text-4xl text-green-700 flex justify-center items-center">
                            <FaMapLocationDot></FaMapLocationDot>
                        </div>
                        <div className="space-y-2 w-56">
                            <h1 className="text-xl font-bold">Our Address</h1>
                            <p>Address : Bangla Road Suite Dhaka 1209</p>
                        </div>
                    </div>
                    <div className="border rounded-md flex gap-8 p-8 hover:border-green-700 hover:shadow-lg items-center">
                        <div className="text-4xl text-green-700 flex justify-center items-center">
                            <MdOutlineWifiCalling3></MdOutlineWifiCalling3>
                        </div>
                        <div className="space-y-2 w-56">
                            <h1 className="text-xl font-bold">Call Us</h1>
                            <p>Address : +880 12354 81209</p>
                        </div>
                    </div>
                    <div className="border rounded-md flex gap-8 p-8 hover:border-green-700 hover:shadow-lg items-center">
                        <div className="text-4xl text-green-700 flex justify-center items-center">
                            <MdEmail></MdEmail>
                        </div>
                        <div className="w-56">
                            <h1 className="text-xl font-bold ">Email Us</h1>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex justify-between flex-col lg:flex-row">
                    <div className="flex-1">
                        <MapContainer center={[23.702973, 90.497445]} zoom={13} scrollWheelZoom={false} className="h-96 w-full">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[23.702973, 90.497445]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;