import { json, useLoaderData } from "react-router";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = useLoaderData();

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </ul>
    </section>
  );
};

export default Products;

export async function loader() {
  const response = await fetch(
    "https://products-13e3e-default-rtdb.firebaseio.com/products/-OB0_S0mn8P8fPCsTJjM/products/products.json"
  );

  if (!response.ok) {
    throw json({ message: "Error!" });
  }
  const resData = await response.json();

  return resData;
}
