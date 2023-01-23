import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestrauntMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9801436&lng=77.5685724&menuId=288893"
    // );
    
    const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=26.9161991&lng=80.9442732&menuId=${resId}`);

   
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
//  if(!restaurant){
//     return <Shimmer />
//  }
  return (!restaurant) ? <Shimmer /> : (
    <div className="menu">
      <div>
        <h1>Restraunt id:{resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
      <ul>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
