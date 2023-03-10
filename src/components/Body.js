import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import  UserContext  from "../utils/userContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const {user,setUser} = useContext(UserContext);


  useEffect(() => {
    //Api calls
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6633025&lng=77.1860118&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // const isOnline = useOnline();
  // if(!isOnline){
  //   return <h1>🔴offline,please check your internet connection</h1>
  // }
  //not render component(Early return)
  if (!allRestaurants) return null;
  // if(filteredRestaurants?.length===0) return <h1>No match your Filter</h1>;

  //conditional Rendering
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-orange-300 my-5">
      <div className="">
      <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search for food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
         <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter data
            const data = filterData(searchText, allRestaurants);
            //update state restaurant
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      

       
        {/* <input value={user.name} onChange={
          e=>setUser({
            ...user,
            name:e.target.value ,
          })
        }>
        </input>
        <input value={user.email} onChange={
          e=>setUser({
           ...user,
            email:e.target.value,
          })
        }>
        </input> */}
      </div>
      <div className=" flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
