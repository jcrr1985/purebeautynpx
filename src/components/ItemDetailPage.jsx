import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesList } from "./itemsData";
import ControlledAccordions from "./Accordion";
import { showAutoClosingMessage } from "../App";

import dress1 from "../assets/images/dress-1.webp";
import earrings from "../assets/images/earrings.jpg";
import flower from "../assets/images/flower.webp";

import ImageCarousel from "./Carousel2";

const ItemDetailPage = ({ addToCart, cart }) => {
  console.log("🚀 ~ file: ItemDetailPage.jsx:9 ~ ItemDetailPage ~ cart:", cart);
  const { itemId } = useParams();
  const [foundItem, setFoundItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showMoreLessButtons, setShowMoreLessButtons] = useState(false);

  const handleAddToCart = (size) => {
    setSelectedSize(size);
    showAutoClosingMessage("Item added to cart", 1500);
    addToCart(foundItem, "add");
    setShowMoreLessButtons(true);
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

  return (
    <div className="item-detail-page">
      <div className="left">
        <ImageCarousel images={images} />
      </div>
      <div className="items-detail-page-container-right">
        <h2>{foundItem?.name}</h2>
        <p>{foundItem?.description}</p>
        <p>Materials: {foundItem?.materials}</p>
        <p>Price: {foundItem?.price} $</p>
        <div className="idp-buttons--container">
          {buttonSizes.map((size) => (
            <button
              className={`idp-button-size ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => handleAddToCart(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div
          className={`idp--add-to-cart--buttons--container ${
            showMoreLessButtons ? "flex-column" : ""
          }`}
        >
          {" "}
          {!showMoreLessButtons ? (
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          ) : (
            <div className="cart-page--buttons--container">
              <button
                className={`btn-more-less ${
                  showMoreLessButtons ? "custom-width" : ""
                }`}
                onClick={() => {
                  addToCart(foundItem, "add");
                  console.log("caartpage");
                }}
              >
                +
              </button>
              <button
                className="btn-more-less"
                onClick={() => addToCart(foundItem, "substract")}
              >
                -
              </button>
            </div>
          )}
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

const images = [dress1, earrings, flower];
