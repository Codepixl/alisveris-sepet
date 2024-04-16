import CartIcon from "./CartIcon";

const Header = ({cart}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">
        React ve Tailwind CSS Sepet Uygulaması
      </h1>
      <CartIcon cart={cart} />
    </div>
  );
};

export default Header;

/*<div className="relative">
<MdShoppingCart className="text-2xl" />
<span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs">0</span>
</div>*/