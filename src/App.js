import React, { lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
const Instamart = lazy(()=>import("./components/Instamart"))
const About = lazy(()=>import("./components/About"))
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Alok kumar",
    email: "alok@example.com",
  });
  return (
    <Provider store={store}>
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,

      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
     path:"/",
     element: <AppLayout />,
     errorElement: <Error/>,
     children:[
      {
        path:"/" ,
        element: <Body />
     },
    
      {
        path:"/about" ,
        element:(
        <Suspense fallback={<h1>Loading...</h1>}> 
        <About /> 
        </Suspense> 
        ),
        children :[{
          path:"profile",
          element: <Profile />
                    
        }]
     },
     {
      path:"/contact" ,
      element: <Contact />
     }, 
     {
      path:"/restaurant/:resId",
      element: <RestrauntMenu />
     }
     , 
     {
      path:"/instamart",
      element: <Suspense fallback={<Shimmer/>}>
      <Instamart />
      </Suspense>
     },
     {
      path:"/cart",
      element: <Cart />
      
     }
  
     ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
