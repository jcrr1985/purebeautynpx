import React, { useEffect } from "react";
import ProceedToPay from "./ProceedToPay";
import MoreSuggestions from "./MoreSuggestions";
import BackButton from "./BackButton";
import CartCounter from "./CartCounter";
const CartPage = ({
  cart,
  removeFromCart,
  addToCart,
  itemCounters,
  cartTotal,
}) => {
  useEffect(() => {
    console.log("cart", cart);
    console.log("cartTotal", cartTotal);
  }, [cart, cartTotal]);

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
                    <p>{item.name}</p>
                    <p>{item.materials}</p>
                    <div className="quantity-buttons">
                      <div className="cart-page--buttons--container">
                        <button
                          onClick={() => {
                            addToCart(item, "add");
                            console.log("caartpage");
                          }}
                        >
                          +
                        </button>
                        <button onClick={() => addToCart(item, "substract")}>
                          -
                        </button>
                      </div>
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
              <ProceedToPay
                cart={cart}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                cartTotal={cartTotal}
              />
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
