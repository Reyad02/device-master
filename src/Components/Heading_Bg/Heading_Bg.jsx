
const Heading_Bg = ({name}) => {
    return (
        <div>
            <div
                className="hero "
                style={{
                    backgroundImage: "url(https://i.postimg.cc/SQXzGRsv/pngtree-abstract-gradient-crystal-texure-background-in-dark-green-color-image-671444.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60 py-32"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">{name}</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading_Bg;