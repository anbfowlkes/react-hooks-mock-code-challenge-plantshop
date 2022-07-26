import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( {dataList, setDataList} ) {
  return (
    <main>
      <NewPlantForm dataList={dataList} setDataList={setDataList} />
      <Search dataList={dataList} setDataList={setDataList} />
      <PlantList dataList={dataList} />
    </main>
  );
}

export default PlantPage;
