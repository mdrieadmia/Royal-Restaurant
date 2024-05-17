import PropTypes from 'prop-types';

const MenuItem = ({item}) => {

    const {name, image, price, recipe } = item;

    return (
        <div className='flex gap-3'>
            <img className='w-32 h-28 rounded-b-full rounded-r-full object-cover' src={image} alt="menu image" />
            <div>
                <h3 className='text-xl font-semibold uppercase'>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-lg text-yellow-600'>${price}</p>
            </div>
        </div>
    );
};


MenuItem.propTypes = {
    item: PropTypes.object
};

export default MenuItem;