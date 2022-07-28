import React, { useState } from "react";

function PlantCard( {image, name, price, id, setDataList, dataList} ) {

  const [isInStock, setIsInStock] = useState(true)

  const changeStock = () => {
    setIsInStock(!isInStock)
  }

  const changePriceFunction = () => {
    let newPrice = window.prompt('Do you wish to change the price?', 'New Price Here')
    console.log(newPrice)
    if (newPrice) {
      fetch(`http://localhost:6001/plants/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({price: newPrice}),
        headers: {'Content-type': 'application/json'}
      })
      .then((res) => res.json())
      .then((newItem) => {
        setDataList(dataList.map((item) => {
          return (item.id === id ? newItem : item)
        }))
      })
    }
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then(() => {
      setDataList(dataList.filter((item) => {
        return (item.id === id ? 0 : 1)
      }))
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p onClick={changePriceFunction}>Price: {price}</p>
      {isInStock ? (
        <button onClick={changeStock} className="primary">In Stock</button>
      ) : (
        <button onClick={changeStock}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete Item</button>
    </li>
  );
}

export default PlantCard;
