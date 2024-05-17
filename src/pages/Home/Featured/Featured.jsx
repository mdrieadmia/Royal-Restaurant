import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item pt-5 mt-16 text-white mb-16 bg-cover bg-center bg-no-repeat bg-fixed">
            <SectionHeading title={'Featured Item'} subtitle={'Checek It Out'}/>
            <div className="flex flex-col md:flex-row items-center gap-10 py-16 px-32 bg-black bg-opacity-40">
                 <div>
                    <img src={featuredImg} alt="Featured Image" />
                 </div>
                 <div>
                    <p className="text-lg font-bold">Aug 20, 2023</p>
                    <p className="uppercase text-3xl font-bold my-2">Where can i get some</p>
                    <p>Discover our Chef&apos;s Special Delight - an exceptional culinary creation featuring a harmonious blend of premium ingredients and innovative techniques. Elevate your dining experience with this tantalizing masterpiece, crafted to perfection.</p>
                    <button className="btn btn-outline mt-10 border-b-4 border-x-0 border-t-0 border-white text-white">Order Now</button>
                 </div>
            </div>
        </div>
    );
};

export default Featured;