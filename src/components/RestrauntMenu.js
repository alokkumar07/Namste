import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();
 
  const addFoodItem = (item) =>{
    dispatch(addItem(item));
    
  }
  //  if(!restaurant){
  //     return <Shimmer />
  //  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex ">
      <div>
        <h1>Restraunt id:{resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}-{" "}
              <button
                className="p-1 m-1 bg-green-400"
                onClick={() => addFoodItem(item)}
              >
                ADD
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
