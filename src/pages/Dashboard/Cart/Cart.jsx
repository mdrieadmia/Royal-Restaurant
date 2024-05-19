import { FaEye, FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    const handleRemove = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then((res)=>{
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        refetch();
                    }
                })

            }
          });
    }
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-3xl">Total Items : {cart.length}</h1>
                <h1 className="text-3xl">Total Price : ${totalPrice}</h1>
                <button className="btn"> Pay Now</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, idx) =>
                                            <tr key={item._id}>
                                                    <th>
                                                        <h1>{idx +1}</h1>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h1>{item.name}</h1>
                                                    </td>
                                                    <td>
                                                        <h1>${item.price}</h1>
                                                    </td>
                                                    <th className="space-x-2">
                                                        <button className="btn btn-ghost"><FaEye/></button>
                                                        <button onClick={()=>handleRemove(item._id)} className="btn btn-ghost text-red-500"><FaTrashAlt/> </button>
                                                    </th>
                                                </tr>
                                                )
                                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;