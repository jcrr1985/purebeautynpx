import React, { useEffect } from "react";
import ProceedToPay from "./ProceedToPay";
import MoreSuggestions from "./MoreSuggestions";
import BackButton from "./BackButton";
import CartCounter from "./CartCounter";
import ButtonsMoreLess from "./ButtonsMoreLess";
const CartPage = ({
  cart,
  removeFromCart,
  addToCart,
  itemCounters,
  cartTotal,
}) => {
  console.log("🚀 ~ cart", cart);
  return (
    <div className="cart-page-wrapper full-screen-cart">
      <div className="cart-page">
        <div className="cart-page--title-container">
          <div className="cart-page--back-arrow--container">
            <BackButton />
          </div>
          <h2 style={{ textAlign: "center", marginTop: "40px" }}>
            Review your order
          </h2>
        </div>
        {cart.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <>
            <div className="grid-container">
              {cart?.map((item, index) => (
                <div key={index} className="cart-item up">
                  <img src={item.imageSrc} alt={item.description} />
                  <div className="cart-legend">
                    <p>
                      <strong>Item:</strong> {item.name}
                    </p>
                    <p>
                      <strong>Materials:</strong> {item.materials}
                    </p>
                    <p>
                      <strong>Size:</strong> {item.size}
                    </p>
                    <div className="quantity-buttons">
                      <ButtonsMoreLess item={item} addToCart={addToCart} />
                      <CartCounter
                        cartItemQuantity={itemCounters[item.id] || 0}
                      />
                      <a
                        className="cart-remove"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            {cart.length && (
              <ProceedToPay cartTotal={cartTotal} itemCounters={itemCounters} />
            )}
            <MoreSuggestions
              cart={cart}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
