import {useContext} from 'react'
import UserContext from "../utils/userContext";
const Footer = () => {
   const {user }= useContext(UserContext);

    return <h4 className='p-10 m-10 text-center text-xl font-bold text-blue-800'>developed by {user.name} - {user.email}</h4>;
  };
export default Footer;