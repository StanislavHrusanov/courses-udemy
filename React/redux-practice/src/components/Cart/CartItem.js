import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, quantity, totalPrice, price } = item;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        ...item,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
