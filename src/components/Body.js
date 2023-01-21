import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

function filterData(searchText,restaurant){
  const filterData=restaurant.filter((restaurant)=>
  restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState();
    

  return (
    <>
      <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search" 
        value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value);
        }}
         />
      
        <button className="search-btn" onClick={()=>{
            //need to filter data
           const data= filterData(searchText,restaurants);
        //update state restaurant
        setRestaurants(data);



            }}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
