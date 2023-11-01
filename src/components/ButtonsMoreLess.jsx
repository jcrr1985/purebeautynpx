const ButtonsMoreLess = ({ addToCart, item }) => {
  return (
    <div className="cart-page--buttons--container">
      <button
        onClick={() => {
          addToCart(item, "add");
          console.log("caartpage");
        }}
      >
        +
      </button>
      <button onClick={() => addToCart(item, "substract")}>-</button>
    </div>
  );
};

export default ButtonsMoreLess;
