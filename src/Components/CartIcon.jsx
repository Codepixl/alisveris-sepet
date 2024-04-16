import { MdShoppingCart } from "react-icons/md";

const CartIcon = ({cart}) => {
    return (
        <div className="relative">
            <FiShoppingCart className="text-2xl"/>
            <span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs"></span>
        {cart.length}
        </div>
    );
};

export default CartIcon;