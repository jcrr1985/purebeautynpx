import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";

import Havealook from "./components/Havealook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CartPage from "./components/CartPage";
import ItemDetailPage from "./components/ItemDetailPage";
import { useLocation } from "react-router-dom";

function AppWrapper() {
  const location = useLocation();
  const showComponent = location.pathname === "/";
  return <AppComponent showComponent={showComponent} />;
}

function AppComponent({ showComponent }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Estado para rastrear los contadores de ítems
  const [itemCounters, setItemCounters] = useState({});

  // Función para agregar un artículo al carrito
  const addToCart = (item, operator) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      if (operator === "add") {
        existingItem.quantity += 1;
      } else if (operator === "substract" && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
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
      }

      setCartTotal(
        (prevTotal) =>
          prevTotal + (operator === "add" ? item.price : -item.price)
      );
    } else {
      item.quantity = 1;

      // Inicializar contador de ítem
      setItemCounters((prevCounters) => ({
        ...prevCounters,
        [item.id]: 1,
      }));
      setCart((prevCart) => [...prevCart, item]);
      setCartTotal((prevTotal) => prevTotal + item.price);
    }
  };

  // Función para eliminar un artículo del carrito
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
    setCartTotal(cartTotal - item.price);
  };

  return (
    <div className="god">
      <Header cart={cart} itemCounters={itemCounters} />
      {showComponent && <Main />}
      <div id="categories">
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route
            path="/category/:category"
            element={<CategoryPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                itemCounters={itemCounters}
              />
            }
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailPage addToCart={addToCart} />}
          />
        </Routes>
      </div>
      {<Havealook />}
    </div>
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
