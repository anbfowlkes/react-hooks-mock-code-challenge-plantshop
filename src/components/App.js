import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [dataList, setDataList] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((res) => res.json())
    .then((data) => setDataList(data))
  },[])

  return (
    <div className="app">
      <Header />
      <PlantPage dataList={dataList} setDataList={setDataList} />
    </div>
  );
}

export default App;
