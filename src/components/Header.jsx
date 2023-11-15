import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import BackButton from './BackButton';
import CartCounter from './CartCounter';

const Header = ({ cart, itemCounters }) => {
  const [searchBarInputOpen, setSearchBarInputOpen] = useState(false);

  useEffect(() => {
    console.log('itemCounters', itemCounters);
  }, [itemCounters]);

  // Calcular el total de ítems en el carrito
  const totalItemsInCart = Object.values(itemCounters).reduce(
    (total, count) => total + count,
    0
  );

  const inputRef = useRef(null);

  const enableSearchBarInput = () => {
    setSearchBarInputOpen(true);
    inputRef.current?.focus();
  };

  const closeSearchBarInput = () => {
    setSearchBarInputOpen(false);
  };

  useEffect(() => {
    console.log('searchBarInputOpen', searchBarInputOpen);
  }, [searchBarInputOpen]);

  return (
    <div>
      <header>
        <div className="malinky-crab"> </div>
        <div className="logo">
          <BackButton />
          <div
            className={`inner-logo ${searchBarInputOpen ? 'no-border' : ''}`}>
            <Link to="/">
              {!searchBarInputOpen && <span>Precious Palettes</span>}
            </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="lupa">
            {!searchBarInputOpen && (
              <SearchIcon onClick={enableSearchBarInput} />
            )}
          </div>
          <Link to="/cart">
            <div>
              <ShoppingCartIcon />
              <CartCounter cartItemQuantity={totalItemsInCart} />
            </div>
          </Link>
        </div>
      </header>
      <div
        className={`search-input-container ${
          searchBarInputOpen ? 'open' : ''
        }`}>
        {searchBarInputOpen && (
          <div
            className="header-icons header-left-icon"
            onClick={closeSearchBarInput}>
            <CloseIcon sx={{ color: '#444' }} />
          </div>
        )}
        <input
          ref={inputRef}
          type="text"
          className={`search-input`}
          placeholder="Search"
        />

        <div
          className="header-icons header-right-icon"
          onClick={enableSearchBarInput}>
          <SearchIcon sx={{ color: '#444' }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
