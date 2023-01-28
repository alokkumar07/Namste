import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText,restaurant){
  const filterData=restaurant.filter((restaurant)=>
  restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData; 
}

const Body = () => {
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(); 

useEffect(()=>{
    //Api calls
   getRestaurants()
},[])     
 
async function getRestaurants()
{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6633025&lng=77.1860118&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json);
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)

  
}
//not render component(Early return)
if(!allRestaurants) return null;
// if(filteredRestaurants?.length===0) return <h1>No match your Filter</h1>;



//conditional Rendering 
  return allRestaurants?.length === 0 ? (

  <Shimmer/> 
  ):(
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
           const data= filterData(searchText,allRestaurants);
        //update state restaurant
        setFilteredRestaurants(data);

            }}>Search</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}
            key={restaurant.data.id}
            >
            <RestrauntCard {...restaurant.data}  />
            </Link>

          );
        })}
      </div>
    </>
  );
};
export default Body;
