// import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import { rootState } from "../redux/store";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/features/hooks/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="space-y-5">
        <button
          onClick={() => handleIncrement(5)}
          className="px-3 py-2 shadow-md bg-lime-200"
        >
          Increment
        </button>
        <p>{count}</p>
        <button
          onClick={handleDecrement}
          className="px-3 py-2 shadow-md bg-lime-200"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
