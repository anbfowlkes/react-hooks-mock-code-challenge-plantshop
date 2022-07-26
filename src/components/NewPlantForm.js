import React from "react";

function NewPlantForm( {dataList, setDataList} ) {
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    let obj = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value
    }
    fetch('http://localhost:6001/plants',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then((newItem) => setDataList([...dataList, newItem]))
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
