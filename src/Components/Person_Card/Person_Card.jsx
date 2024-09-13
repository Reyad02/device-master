
const Person_Card = ({ name, skills, img }) => {
    return (
        <div className="relative hover:scale-110 hover:duration-300 hover:transform	hover:ease-in	">
            <div className=" bg-transparent  w-96 rounded-xl shadow-xl ">
                <figure className="relative">
                    <img className="rounded-xl"
                        src={img}
                        alt="Shoes" />
                    <div className="absolute bg-black z-10 inset-0 opacity-30 rounded-xl"></div>
                </figure>
            </div>

            <div className="absolute bottom-8 left-8 z-50 ">
                <span className="text-2xl text-white font-bold">{name}</span>
            </div>
            <div className="absolute bottom-4 left-8 z-50 ">
                <span className="text-sm text-[#00A452] font-bold">{skills[0]}</span>
            </div>
        </div>
    );
};

export default Person_Card;