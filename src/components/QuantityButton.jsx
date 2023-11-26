const QuantityButton = ({ item, operator, addToCart }) => {
  return (
    <button onClick={() => addToCart(item, operator)}>
      {operator === "substract" ? "-" : "+"}
    </button>
  );
};

export default QuantityButton;
