import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex flex-col items-center justify-between 
     gap-3 p-4 mt-10 ml-5 rounded-xl  ">
  {
    cart.length > 0  ? 
    (<div className="flex flex-row  ">



      <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <div className= "text-2xl font-bold text-green-700 mb-4">Your Cart</div>
          <div className="text-2xl font-bold text-green-700 mb-4">Summary</div>
          <p className="text-gray-700 mb-2">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-gray-700 mb-4">Total Amount: ${totalAmount}</p>
          <button className=" bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline;">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col  items-center gap-8 py-52">
      <h1 className="text-[40px]">Your Cart is Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 text-white font-bold h-[50px] w-[130px] rounded-lg ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
