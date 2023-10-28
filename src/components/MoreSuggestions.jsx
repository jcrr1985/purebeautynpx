import React from "react";
import CartCounter from "./CartCounter";
import QuantityButton from "./QuantityButton";

const MoreSuggestions = ({ removeFromCart, addToCart }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
        More suggestion for you
      </h3>
      <div className="grid-container suggestions">
        {dummySuggestedItems.map((item, index) => (
          <div
            key={index}
            className="cart-item suggestions cart-item-suggestions"
          >
            <img src={item.imageSrc} />
            <div className="cart-legend">
              <p>{item.name}</p>
              <p>{item.materials}</p>
              <a className="cart-remove" onClick={() => removeFromCart(item)}>
                Remove
              </a>
              <div className="quantity-buttons">
                <div className="cart-page--buttons--container">
                  <QuantityButton
                    item={item}
                    operator="add"
                    addToCart={addToCart}
                  />
                </div>
                <QuantityButton
                  item={item}
                  operator="substract"
                  addToCart={addToCart}
                />
              </div>
              <CartCounter cartItemQuantity={item.quantity} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreSuggestions;

const dummySuggestedItems = [
  {
    id: 1,
    name: "Valkyrie soul",
    category: "Brooches",
    price: 50,
    imageSrc: "https://m.media-amazon.com/images/I/8133cW16yhL._AC_UL400_.jpg",
    materials: "Sapphires, Vanntzium",
  },
  {
    id: 2,
    name: "Silver Chainmail",
    category: "Brooches",
    price: 55,
    imageSrc: "https://m.media-amazon.com/images/I/81cpzU+uRIL._AC_UL400_.jpg",
    materials: "Lolita, Aquamarine, Zerdiviano",
  },
  {
    id: 3,
    name: "Sword of Vermilion",
    category: "Earrings",
    price: 25,
    imageSrc: "https://m.media-amazon.com/images/I/717foItSdPL._AC_UL400_.jpg",
    materials: "Gold, Silver, Diamond",
  },
];
