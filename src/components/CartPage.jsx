import ProceedToPay from './ProceedToPay'
import BackButton from './BackButton'
import CartCounter from './CartCounter'
import ButtonsMoreLess from './ButtonsMoreLess'
import CartEmpty from './CartEmpty'

const CartPage = ({
  cart,
  removeFromCart,
  addToCart,
  itemCounters,
  cartTotal,
}) => {
  console.log('🚀 ~ cart', cart)

  return (
    <div className='cart-page-wrapper full-screen-cart'>
      <div className='cart-page'>
        <div className='cart-page--title-container'>
          <div className='cart-page--back-arrow--container'>
            <BackButton />
          </div>
          {cart.length !== 0 && (
            <h2
              style={{
                textAlign: 'center',
                marginTop: '40px',
                marginBottom: '40px',
              }}
            >
              Review your order
            </h2>
          )}
        </div>
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <div className='grid-container'>
              {cart?.map((item, index) => (
                <div key={index} className='cart-item up'>
                  <img src={item.imageSrc} alt={item.description} />
                  <div className='cart-legend'>
                    <p>
                      <strong>Item:</strong> {item.name}
                    </p>
                    <p>
                      <strong>Materials:</strong> {item.materials}
                    </p>
                    <p>
                      <strong>Size:</strong> {item.selectedSize}
                    </p>
                    <p>
                      <strong>Price:</strong> {item.price}
                    </p>
                    <div className='quantity-buttons'>
                      <ButtonsMoreLess item={item} addToCart={addToCart} />
                      <CartCounter
                        cartItemQuantity={itemCounters[item.id] || 0}
                      />
                      <a
                        className='cart-remove'
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
            {/* <MoreSuggestions addToCart={addToCart} /> */}
          </>
        )}
      </div>
    </div>
  )
}

export default CartPage
