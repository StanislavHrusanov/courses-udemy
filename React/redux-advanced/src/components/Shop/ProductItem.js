import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { title, price, description, id } = props;

  const addItemToCartHandler = () => {
    const newTotalQty = cart.totalQty + 1;

    const updatedItems = cart.items.slice();
    const existingItem = updatedItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        name: title,
        price: price,
        description: description,
        quantity: 1,
        totalPrice: price,
      });
    }
    const newCart = {
      totalQty: newTotalQty,
      items: updatedItems,
    };

    dispatch(cartActions.replaceCart(newCart));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
