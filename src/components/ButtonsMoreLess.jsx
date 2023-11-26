import Swal from "sweetalert2";

const ButtonsMoreLess = ({ addToCart, item }) => {
  const showAutoClosingMessage = (message, duration) => {
    Swal.fire({
      icon: "success",
      title: message,
      timer: duration,
      showConfirmButton: false,
    });
  };

  return (
    <div className="cart-page--buttons--container">
      <button
        onClick={() => {
          showAutoClosingMessage("Item added to cart", 1500);
          addToCart(item, "add");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          addToCart(item, "substract");
          showAutoClosingMessage("Item removed from cart", 1500);
        }}
      >
        -
      </button>
    </div>
  );
};

export default ButtonsMoreLess;
