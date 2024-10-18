import { useSelector, useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const showHideCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button onClick={showHideCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalQty}</span>
    </button>
  );
};

export default CartButton;
