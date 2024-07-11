
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

      <div>

        <div > 
          <img src={item.image}  />
        </div>
        <div >
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description}</h1>
          <div className="flex flex-row gap-12 ">
            <p className= "text-2xl font-bold text-green-500 mb-4">{item.price}</p>
            <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " 
            onClick={removeFromCart}>Delete
              {/* <FcDeleteDatabase/> */}
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
