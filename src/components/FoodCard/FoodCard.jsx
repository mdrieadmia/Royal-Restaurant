import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';


const FoodCard = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const [, refetch] = useCart();
    const { name, image, price, recipe, _id } = item;
    const location = useLocation();
    const navigate = useNavigate();
    const handleAddToCart = () =>{
        if(user && user.email){
            const cartItem = {
                menId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added in cart successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                refetch();
            })
        }
        else{
            Swal.fire({
                title: "You'r Not Logged In!",
                text: "Please login to add to cart this item.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state : {from : location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Food Image" />
                    <p className='bg-slate-900 px-5 py-[6px] absolute right-0 top-0 text-white font-bold mr-4 mt-4'>${price}</p>
                </figure>
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className="btn btn-outline border-b-4 border-x-0 border-t-0 border-gray-600 bg-gray-100 text-black">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object
};
export default FoodCard;