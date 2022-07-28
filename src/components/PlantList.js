import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ dataList, setDataList } ) {
  return (
    <ul className="cards">
      {dataList.map((item) => {
        return <PlantCard setDataList={setDataList} dataList={dataList} id={item.id} key={item.id} name={item.name} image={item.image} price={item.price}/>
      })}
    </ul>
  );
}

export default PlantList;
