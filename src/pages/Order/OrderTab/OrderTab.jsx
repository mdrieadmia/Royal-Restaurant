import FoodCard from '../../../components/FoodCard/FoodCard';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mb-16 w-full'>
                        {
                            items.map(item => <FoodCard key={item._id} item={item} />)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.array
};
export default OrderTab;