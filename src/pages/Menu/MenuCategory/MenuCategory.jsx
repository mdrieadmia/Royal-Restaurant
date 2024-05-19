import MenuItem from "../../../components/MenuItem/MenuItem";
import PropTypes from 'prop-types';
import Cover from "../../../shared/Cover/Cover";
import { Link } from "react-router-dom";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover image={coverImg} title={title} />}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                {
                    items.slice(0,6).map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="flex justify-center items-center mt-5 mb-16">
                <Link to={`/order/${title}`} className="btn btn-outline border-b-4 border-x-0 border-t-0 border-gray-600 text-black">Order Now</Link>
            </div>
        </div>
    );
};
MenuCategory.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string,
    coverImg: PropTypes.string,
};
export default MenuCategory;