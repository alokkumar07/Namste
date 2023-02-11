import { useState ,useContext} from "react";
import LOGO from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Title = () => (
  <a href="/">
    <img className="h-28 p-2  rounded-full" alt="logo" src={LOGO} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline(); //custom hook


  const {user} = useContext(UserContext)

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems)



  return (
    <div className=" sm:flex  justify-between items-center text-center border shadow-lg ">
      <Title />
      <div className=" flex justify-center">
        <ul className="flex py-10 font-bold">
          <li className="px-2  hover:text-orange-600">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-2 hover:text-orange-600">
            <Link to="/about"> About </Link>
          </li>
          <li className="px-2  hover:text-orange-600">
            <Link to="/contact"> Contact </Link>
          </li>
          <li className="px-2  hover:text-orange-600">
            <Link to="/instamart"> Instamart </Link>
          </li>
          <Link to="/cart">
          <li className="px-2  hover:text-orange-600">Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅Online" : "🔴Offline"}</h1>
     <span className="p-10 font-bold  hover:text-orange-600">{user.name}</span>   
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
