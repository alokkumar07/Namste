import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const { resId } = useParams();// call useParams and get value of restaurant id using object destructuring

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
    <div className="flex flex-col">
      <div className="flex justify-center bg-[#171a29] p-10 border-2">
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <div className="flex flex-col text-white pl-10">
         <h1 className="text-lg  font-semibold text-white">Restraunt id:{resId}</h1>
        <h2 className="text-3xl text-white">{restaurant?.name}</h2>
        <div className="">
        <h3 className="flex">{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3 className="font-bold">{restaurant?.avgRating}⭐ stars</h3>
        <h3 className="font-bold p-1">{restaurant?.costForTwoMsg}</h3>
      </div>
      </div>
      </div>
      <div className="p-5">
      <div className="">
      {Object.keys(restaurant ?.menu.items).length} ITEMS
      </div>
        <div className="p-4 m-5">
        <ul className=" flex-wrap">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className="p-2 m-5 bg-gray-200 rounded-lg shadow-lg border-transparent  hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450 justify-center"

            key={item.id}>
            <div className="p-3 font-bold text-xl">{item.name}-{" "}</div>
              <div className="w-72 h-44 flex shadow-lg border-transparent  hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450 justify-center">
              <img src={IMG_CDN_URL + item?.cloudinaryImageId}  alt={item.name}/>
              </div>
              <div className="text-slate-900">  {item.description}    </div> 
            <div className=""> ₹{item.price /100}  </div>
              <div className="">
              <button
                className="p-1 m-1 bg-green-400"
                onClick={() => addFoodItem(item)}
              >
                ADD
              </button>

              </div>
            </div>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
