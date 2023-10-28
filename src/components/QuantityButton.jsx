const QuantityButton = ({ item, operator, addToCart }) => {
  return <button onClick={() => addToCart(item, operator)}>+</button>;
};

export default QuantityButton;
