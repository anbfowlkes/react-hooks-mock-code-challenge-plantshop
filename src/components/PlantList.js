import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {dataList} ) {
  return (
    <ul className="cards">
      {dataList.map((item) => {
        return <PlantCard key={item.id} name={item.name} image={item.image} price={item.price}/>
      })}
    </ul>
  );
}

export default PlantList;
