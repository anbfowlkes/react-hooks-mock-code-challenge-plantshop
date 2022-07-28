import React from "react";

function Search( {dataList, setDataList, keepData} ) {

  const searchFunction = (e) => {
    // console.log('seaching happening')
    // console.log(e.target.value)
    let val = e.target.value
    let dat = [...keepData]
    setDataList(dat.filter((item) => {
      return (item.name.toLowerCase().includes(val.toLowerCase()) ? item : null)
    }))
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchFunction}
      />
    </div>
  );
}

export default Search;
