import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Categories from './components/Categories'
import CategoryPage from './components/CategoryPage'

import Havealook from './components/Havealook'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CartPage from './components/CartPage'
import ItemDetailPage from './components/ItemDetailPage'
import { useLocation } from 'react-router-dom'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripePayment from './components/StripePayment'
import Success from './components/Success'
import Swal from 'sweetalert2'

import CartEmpty from './components/CartEmpty'

// PROD
// const apiKey =
//   'pk_live_51NmKBUIyGuUAStfN4rAplznF6ujE3m1HNSvJIly1f7QQ5NcHeyja8ZWZDVk5Om5nkgF5khWOtNv8Cmv6tBA6Rrcs00rADPAwuU'

// //DEV
const apiKey =
  'pk_test_51NmKBUIyGuUAStfNoHpVSC7wjVBwuo8dMuGBe4c4H6z52EdTfdD2XBypC6B3naKeL01K0hVJ3bs45zADZNHSBaZM00UWQtptaZ'

const stripePromise = loadStripe(apiKey)

function AppWrapper() {
  const location = useLocation()
  const showComponent = location.pathname === '/'
  return <AppComponent showComponent={showComponent} />
}

function AppComponent({ showComponent }) {
  const [cart, setCart] = useState([])
  //total a pagar: number
  const [cartTotal, setCartTotal] = useState(0)
  // Estado para rastrear los contadores de ítems
  const [itemCounters, setItemCounters] = useState({})

  //effect for catTotal

  useEffect(() => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.quantity
    })
    setCartTotal(total)
  })

  useEffect(() => {
    console.log('itemCounters', itemCounters)
  }, [itemCounters])

  //return selectedSizes for passing to cartPage

  const [selectedSizes, setSelectedSizes] = useState([])

  const returnSelectedSizes = (selectedSize) => {
    setSelectedSizes(selectedSize)
  }

  //effecto for itemCounters

  // Función para agregar un artículo al carrito
  const addToCart = (item, operator) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.id === item.id && cartItem.selectedSize === item.selectedSize,
    )

    if (existingItemIndex !== -1) {
      const existingItem = cart[existingItemIndex]

      if (operator === 'add') {
        showAutoClosingMessage('Item added to cart', 1800, 'success')
        existingItem.quantity += 1
      } else if (operator === 'substract' && existingItem.quantity > 1) {
        showAutoClosingMessage('Item removed from cart', 1800, 'success')
        existingItem.quantity -= 1
      }

      const updatedCart = [...cart]
      updatedCart[existingItemIndex] = existingItem
      setCart(updatedCart)

      setCartTotal(
        (prevTotal) =>
          prevTotal + (operator === 'add' ? item.price : -item.price),
      )
    } else {
      item.quantity = 1
      showAutoClosingMessage('Item added to cart', 1800, 'success')
      const newItem = { ...item, selectedSize: item.selectedSize }

      setCart((prevCart) => [...prevCart, newItem])
      setCartTotal((prevTotal) => prevTotal + item.price)
    }

    // Actualizar contadores de cantidad de cada ítem en el carrito
    setItemCounters((prevCounters) => ({
      ...prevCounters,
      [`${item.id}-${item.selectedSize}`]:
        (prevCounters[`${item.id}-${item.selectedSize}`] || 0) +
        (operator === 'add' ? 1 : -1),
    }))
  }

  // Función para eliminar un artículo del carrito
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item)
    setCart(updatedCart)
    setCartTotal(cartTotal - item.price)

    const updatedCounters = { ...itemCounters }
    delete updatedCounters[item.id]
    setItemCounters(updatedCounters)
    setCartTotal(cartTotal - item.price)
  }

  return (
    <Elements stripe={stripePromise}>
      <div className='god'>
        <Header cart={cart} itemCounters={itemCounters} />

        <div className='under-header'>
          {showComponent && <Main />}
          <section id='categories'>
            <Routes>
              {/* HOME */}
              <Route path='/' element={<Categories />} />
              {/* <-CATEGORIES */}
              <Route
                path='/category/:category'
                element={<CategoryPage addToCart={addToCart} />}
              />
              {/* CARTPAGE */}
              <Route
                path='/cart'
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
                path='/item/:itemId'
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
                path='/stripe-payment'
                element={
                  <StripePayment
                    cartTotal={cartTotal}
                    setItemCounters={setItemCounters}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    setCart={setCart}
                  />
                }
              />
              {/* sUCCESS */}
              <Route path='/success' element={<Success setCart={setCart} />} />
              <Route path='cart-empty' element={<CartEmpty />} />
            </Routes>
          </section>
        </div>
        {/* {
          <Havealook
            cart={cart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        } */}
      </div>
    </Elements>
  )
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}

export default App

export const showAutoClosingMessage = (message, duration, status) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  Toast.fire({
    icon: status,
    title: message,
  })
}
