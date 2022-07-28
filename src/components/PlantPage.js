import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( {dataList, setDataList, keepData} ) {
  return (
    <main>
      <NewPlantForm dataList={dataList} setDataList={setDataList} />
      <Search dataList={dataList} setDataList={setDataList} keepData={keepData} />
      <PlantList dataList={dataList} setDataList={setDataList} />
    </main>
  );
}

export default PlantPage;
