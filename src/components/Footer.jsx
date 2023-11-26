import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ imageSrc, name, price, addToCart, materials, id }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ name, price, imageSrc, id });
  };

  return <div className="footer">&copy; 2023 Precious Palletes</div>;
};

export default Footer;
