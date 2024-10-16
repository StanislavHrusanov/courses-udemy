import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // const handleIncrement = () => {
  //   dispatch({ type: "increment" });
  // };

  // const handleIncrease = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };

  // const handleDecrement = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
