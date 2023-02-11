import {useContext} from 'react'
import UserContext from "../utils/userContext";
const Footer = () => {
   const {user }= useContext(UserContext);

    return (
    <div>
    <h4 className='p-20 text-center font-bold text-xl flex justify-center bg-pink-50 shadow-lg sm:bg-blue-50'>Design And Developed By: {user.name} - {user.email} - All Right Reserved by &copy; Alok kumar</h4>;
    </div>
);
  };
export default Footer;