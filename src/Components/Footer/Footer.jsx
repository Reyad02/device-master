import logo from "/Devicemaster.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <div className=" bg-base-200">
            <footer className="footer text-base-content p-10 max-w-7xl mx-auto">
                <aside>
                    <div>
                        <img className="w-32" src={"https://i.postimg.cc/qgH3vPsh/Devicemaster-logo-white.png"} alt="" />
                    </div>
                    <p>
                        Device Master Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <div className="flex gap-2">
                        <div className="bg-[#00A452] p-2 rounded-md hover:cursor-pointer	">
                            <FaFacebook className="text-xl text-white" />
                        </div>
                        <div className="bg-[#00A452] p-2 rounded-md hover:cursor-pointer	">
                            <FaSquareXTwitter className="text-xl text-white" />
                        </div>
                        <div className="bg-[#00A452] p-2 rounded-md hover:cursor-pointer	">
                            <FaInstagram className="text-xl text-white" />
                        </div>
                        <div className="bg-[#00A452] p-2 rounded-md hover:cursor-pointer	">
                            <FaWhatsapp className="text-xl text-white" />
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;