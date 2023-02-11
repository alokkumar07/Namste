 import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
 import UserContext from "../utils/userContext";
 const RestrauntCard = ({
    name,
    cuisines,
    lastMileTravelString,
    cloudinaryImageId,
    costForTwoString,
    avgRating,
    area,
  }) => {
    const {user} = useContext(UserContext);
    return (
      <div className="p-2 w-72 h-96 border-transparent  hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450">
        <img src={IMG_CDN_URL + cloudinaryImageId  }  />
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-lg text-gray-900 py-3">{cuisines.join(", ")}</p>
       
        <div className="flex justify-between font-bold">
        <span className="p-1 justify-between font-bold bg-orange-400 rounded-l-sm text-white"> {avgRating} ★</span>
        <h4>{lastMileTravelString}</h4>
        <span>{costForTwoString}</span>

        </div>
        {/* <h5 className="font-bold">{user.name} - {user.email}</h5> */}
      </div>
    );
  };
  
  export default RestrauntCard;