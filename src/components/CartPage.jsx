import React, { useEffect, useState } from 'react';
import ProceedToPay from './ProceedToPay';
import MoreSuggestions from './MoreSuggestions';
import BackButton from './BackButton';
import CartCounter from './CartCounter';
import ButtonsMoreLess from './ButtonsMoreLess';
import { Link } from 'react-router-dom';

const CartPage = ({
  cart,
  removeFromCart,
  addToCart,
  itemCounters,
  cartTotal,
}) => {
  console.log('🚀 ~ cart', cart);

  // Helper function to calculate the top position for the empty cart message
  const calculateEmptyCartMessageTop = () => {
    const titleContainerHeight =
      document.getElementById('cart-title-container')?.offsetHeight || 0;
    return `calc(50% - ${titleContainerHeight}px)`;
  };
  return (
    <div className="cart-page-wrapper full-screen-cart">
      <div className="cart-page">
        <div className="cart-page--title-container">
          <div className="cart-page--back-arrow--container">
            <BackButton />
          </div>
          <h2 style={{ textAlign: 'center', marginTop: '40px' }}>
            Review your order
          </h2>
        </div>
        {cart.length === 0 ? (
          <div className="cat-page-cart-empty text-italianno">
            <p
              className="sad-basket-empty centered-text"
              style={{}}>
              Sad your basket is empty! <br />
              <Link to="/category/all-items">
                <button className="button">Let's start shopping!</button>
              </Link>
            </p>
          </div>
        ) : (
          <>
            <div className="grid-container">
              {cart?.map((item, index) => (
                <div
                  key={index}
                  className="cart-item up">
                  <img
                    src={item.imageSrc}
                    alt={item.description}
                  />
                  <div className="cart-legend">
                    <p>
                      <strong>Item:</strong> {item.name}
                    </p>
                    <p>
                      <strong>Materials:</strong> {item.materials}
                    </p>
                    <p>
                      <strong>Size:</strong> {item.selectedSizes.join(', ')}
                    </p>
                    <div className="quantity-buttons">
                      <ButtonsMoreLess
                        item={item}
                        addToCart={addToCart}
                      />
                      <CartCounter
                        cartItemQuantity={itemCounters[item.id] || 0}
                      />
                      <a
                        className="cart-remove"
                        onClick={() => removeFromCart(item)}>
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
                cartTotal={cartTotal}
                itemCounters={itemCounters}
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
