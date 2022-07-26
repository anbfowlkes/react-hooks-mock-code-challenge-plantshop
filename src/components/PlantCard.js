import React, { useState } from "react";

function PlantCard( {image, name, price} ) {

  const [isInStock, setIsInStock] = useState(true)

  const changeStock = () => {
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={changeStock} className="primary">In Stock</button>
      ) : (
        <button onClick={changeStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
