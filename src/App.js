import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Categories from './components/Categories';
import CategoryPage from './components/CategoryPage';

import Havealook from './components/Havealook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartPage from './components/CartPage';
import ItemDetailPage from './components/ItemDetailPage';
import { useLocation } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripePayment from './components/StripePayment';
import Success from './components/Success';
import Swal from 'sweetalert2';

const apiKey = `${process.env.STRIPE_PUBLIC_API_KEY}`;

const stripePromise = loadStripe(apiKey);

function AppWrapper() {
  const location = useLocation();
  const showComponent = location.pathname === '/';
  return <AppComponent showComponent={showComponent} />;
}

function AppComponent({ showComponent }) {
  const [cart, setCart] = useState([]);
  //total a pagar: number
  const [cartTotal, setCartTotal] = useState(0);
  // Estado para rastrear los contadores de ítems
  const [itemCounters, setItemCounters] = useState({});

  //effect for catTotal

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setCartTotal(total);
  });

  //return selectedSizes for passing to cartPage

  const [selectedSizes, setSelectedSizes] = useState([]);

  const returnSelectedSizes = (selectedSize) => {
    setSelectedSizes(selectedSize);
  };

  //effecto for itemCounters

  // Función para agregar un artículo al carrito
  const addToCart = (item, operator) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      if (operator === 'add') {
        showAutoClosingMessage('Item added to cart', 1500);
        existingItem.quantity += 1;
        console.log(1);
      } else if (operator === 'substract' && existingItem.quantity > 1) {
        showAutoClosingMessage('Item removed from cart', 1500);
        existingItem.quantity -= 1;
        console.log(2);
      }
      // Actualizar contador de ítem
      setItemCounters((prevCounters) => ({
        ...prevCounters,
        [item.id]: existingItem.quantity,
      }));

      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.id === existingItem.id
      );
      if (existingItemIndex !== -1) {
        const updatedCarro = [...cart];
        updatedCarro.splice(existingItemIndex, 1, existingItem);
        setCart(updatedCarro);
        console.log(3);
      }

      setCartTotal(
        (prevTotal) =>
          prevTotal + (operator === 'add' ? item.price : -item.price)
      );
    } else {
      item.quantity = 1;

      // Inicializar contador de ítem
      setItemCounters((prevCounters) => ({
        ...prevCounters,
        [item.id]: 1,
      }));
      const itemWithSelectedSizes = { ...item, selectedSizes };
      setCart((prevCart) => [...prevCart, itemWithSelectedSizes]);
      setCartTotal((prevTotal) => prevTotal + item.price);
      console.log('4');
    }
  };

  // Función para eliminar un artículo del carrito
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
    setCartTotal(cartTotal - item.price);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="god">
        <Header
          cart={cart}
          itemCounters={itemCounters}
        />
        <div className="under-header">
          {showComponent && <Main />}
          <div id="categories">
            <Routes>
              {/* HOME */}
              <Route
                path="/"
                element={<Categories />}
              />
              {/* <-CATEGORIES */}
              <Route
                path="/category/:category"
                element={<CategoryPage addToCart={addToCart} />}
              />
              {/* CARTPAGE */}
              <Route
                path="/cart"
                element={
                  <CartPage
                    cart={cart}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    itemCounters={itemCounters}
                    cartTotal={cartTotal}
                    setItemCounters={setItemCounters}
                  />
                }
              />
              {/* ITEMDETAILPAGE */}
              <Route
                path="/item/:itemId"
                element={
                  <ItemDetailPage
                    addToCart={addToCart}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    returnSelectedSizes={returnSelectedSizes}
                  />
                }
              />
              {/* STRIPEPAYMENT */}
              <Route
                path="/stripe-payment"
                element={
                  <StripePayment
                    cartTotal={cartTotal}
                    setItemCounters={setItemCounters}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                }
              />
              {/* sUCCESS */}
              <Route
                path="/success"
                element={<Success />}
              />
            </Routes>
          </div>
        </div>
        {<Havealook />}
      </div>
    </Elements>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

export const showAutoClosingMessage = (message, duration) => {
  Swal.fire({
    icon: 'success',
    title: message,
    timer: duration,
    showConfirmButton: false,
  });
};
