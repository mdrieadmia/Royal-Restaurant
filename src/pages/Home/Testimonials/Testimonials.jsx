import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import { useEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import 'swiper/css/navigation';
import 'swiper/css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('ReviewsData.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <SectionHeading title={'Testimonials'} subtitle={'What Our Client Say'} />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="px-32 py-10 text-center">
                           <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180}}
                                value={review.reating}
                                readOnly
                            />
                            <p className="mt-10">{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;