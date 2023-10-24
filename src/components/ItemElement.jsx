import React from "react";
import { Link } from "react-router-dom";

const ItemElement = ({ imageSrc, name, price, addToCart, materials, id }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("add to cart, stopping propagation");
    addToCart({ name, price, imageSrc, id });
  };

  return (
    <Link to={`/item/${id}`} className="item-link">
      <div className="item category">
        <img src={imageSrc} alt={name} />
        <h5 className="item-title">{name}</h5>
        <div className="description-container">
          <p>{materials}</p>
          <p>{price} $</p>
        </div>
        <button className="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ItemElement;
