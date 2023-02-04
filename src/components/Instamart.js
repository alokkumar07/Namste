import { useState } from "react";
const Section = ({ title, description ,isVisible,setIsVisible}) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {
        isVisible? <button
        onClick={() => setIsVisible(false)}
        className="cursor-pointer underline"
      >
        Hide
      </button>
        :
        <button
        onClick={() => setIsVisible(true)}
        className="cursor-pointer underline"
      >
        show
      </button> 
      }
    
  
      {isVisible && <p>{description} </p>}
    </div>
  );
};
const Instamart = () => {
  const[visibleSection, setIsVisibleSection] = useState("about")
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart </h1>
      <Section
        title={"About Instamart"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores provident rem corporis quo error commodi facilis, repellat molestias ut tempora in delectus sunt, totam sapiente earum, nobis vitae eligendi."
        }
        isVisible={visibleSection=="about"}
        setIsVisible={()=>setIsVisibleSection('about')}

      /> 
      <Section
        title={"Team Instamart"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores provident rem corporis quo error commodi facilis, repellat molestias ut tempora in delectus sunt, totam sapiente earum, nobis vitae eligendi."
        }
        isVisible={visibleSection=="team"}

        setIsVisible={()=>setIsVisibleSection("team")}

      />
      <Section
        title={"Carrer Instamart"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores provident rem corporis quo error commodi facilis, repellat molestias ut tempora in delectus sunt, totam sapiente earum, nobis vitae eligendi."
        }
        isVisible={visibleSection=="carrer"}

        setIsVisible={()=>setIsVisibleSection('carrer')}


      />

      {/* <AboutInstaMart/>
     <DetailsofInstaMart/>
     <TeamInstaMart/>
     <Product />
     <Carrers /> */}
    </div>
  );
};
export default Instamart;
