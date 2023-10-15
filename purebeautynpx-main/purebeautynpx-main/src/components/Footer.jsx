import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ imageSrc, name, price, addToCart, materials, id }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("add to cart, stopping propagation");
    addToCart({ name, price, imageSrc, id });
  };

  return (
    <div className="footer">
        &copy; 2023 Precious Palletes
    </div>
  );
};

export default Footer;
