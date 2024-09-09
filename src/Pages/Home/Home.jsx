import Card from '../../Components/Card/Card';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    return (
        <div >
            <Hero></Hero>
            <div className='mt-16 space-y-4'>
                <p className='text-center text-lg text-[#00A452]'>Our services</p>
                <h1 className=' mx-auto text-center max-w-2xl text-5xl text-black'>Fast and Reliable Repairs for Every Need
                </h1>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-3'>
                        <Card name={"Data Recovery"} overview={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, dolorum."} logo={"https://i.postimg.cc/9F3v7FQK/icon-7.png"} img={"https://i.postimg.cc/8z439Rmg/service-img-8.jpg"} />

                        <Card name={"Data Recovery"} overview={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, dolorum."} logo={"https://i.postimg.cc/9F3v7FQK/icon-7.png"} img={"https://i.postimg.cc/8z439Rmg/service-img-8.jpg"} />
                        
                        <Card name={"Data Recovery"} overview={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, dolorum."} logo={"https://i.postimg.cc/9F3v7FQK/icon-7.png"} img={"https://i.postimg.cc/8z439Rmg/service-img-8.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;