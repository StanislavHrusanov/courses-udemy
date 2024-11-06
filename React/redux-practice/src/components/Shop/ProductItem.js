import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({product }) => {
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{product.name}</h3>
          <div className={classes.price}>${product.price.toFixed(2)}</div>
        </header>
        <p>{product.description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
