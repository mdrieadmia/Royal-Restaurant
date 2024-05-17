import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const FoodCategory = () => {
    return (
        <div>
            <SectionHeading title={'Order Online'} subtitle={'From 11:00 am to 10:00 pm'} />
            <div className="mb-16">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={true}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <img src={slide2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FoodCategory;