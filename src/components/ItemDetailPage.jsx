import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesList } from "./itemsData";
import ControlledAccordions from "./Accordion";
import { Accordion } from "@mui/material";

const ItemDetailPage = ({ addToCart }) => {
  const { itemId } = useParams();
  const [foundItem, setFoundItem] = useState(null); // Estado para foundItem
  const [selectedSize, setSelectedSize] = useState(null); // Estado para el botón seleccionado

  const handleAddToCart = (size) => {
    addToCart(foundItem, "add");
    setSelectedSize(size);
  };

  // Buscar el ítem en la lista de categorías

  useEffect(() => {
    categoriesList.forEach((category) => {
      const foundItem = category.items.find(
        (item) => item.id === parseInt(itemId)
      );
      if (foundItem) {
        setFoundItem(foundItem); // Actualiza el estado con el item encontrado
      }
    });
  }, [itemId]);

  useEffect(() => {
    console.log("foundItem", foundItem);
  }, [foundItem]);

  return (
    <div className="item-detail-page">
      <div className="left">
        <img src={foundItem?.imageSrc} alt={foundItem?.name} />
      </div>
      <div className="items-detail-page-container-right">
        <h2>{foundItem?.name}</h2>
        <p>{foundItem?.description}</p>
        <p>Materials: {foundItem?.materials}</p>
        <p>Price: {foundItem?.price} $</p>
        <div className="idp-buttons--container">

          {buttonSizes.map((size) => (
            <button
            className={`idp-button-size ${selectedSize === size ? "selected" : ""}`}
            onClick={() => handleAddToCart(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="idp--add-to-cart--buttons--container">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <button className="add-to-wishlist" onClick={handleAddToCart}>
            Add to Wish List
          </button>
        </div>
      </div>
      {foundItem && (
        <div className="idp--accordeon--container">
          <ControlledAccordions foundItem={foundItem} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;

const buttonSizes = [
  "xx small",
  "x small",
  "small",
  "medium",
  "large",
  "x large",
  "xx large",
];