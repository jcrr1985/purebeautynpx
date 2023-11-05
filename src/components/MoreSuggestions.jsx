import React from "react";
import CartCounter from "./CartCounter";
import QuantityButton from "./QuantityButton";
import necklace from "../assets/images/necklace.jpeg";

const MoreSuggestions = ({ removeFromCart, addToCart }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem", marginTop: "4%" }}>
      <h3 style={{ textAlign: "center", marginBottom: "3rem" }}>
        More suggestion for you
      </h3>
      <div className="grid-container suggestions">
        {dummySuggestedItems.map((item, index) => (
          <div key={index} className="cart-item suggestions">
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

                  <QuantityButton
                    item={item}
                    operator="substract"
                    addToCart={addToCart}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CartCounter cartItemQuantity={item.quantity} />
              </div>
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
    imageSrc: necklace,
    materials: "Sapphires, Vanntzium",
  },
  {
    id: 2,
    name: "Silver Chainmail",
    category: "Brooches",
    price: 55,
    imageSrc: necklace,
    materials: "Lolita, Aquamarine, Zerdiviano",
  },
  {
    id: 3,
    name: "Sword of Vermilion",
    category: "Earrings",
    price: 25,
    imageSrc: necklace,
    materials: "Gold, Silver, Diamond",
  },
];
