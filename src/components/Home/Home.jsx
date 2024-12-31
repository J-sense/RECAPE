import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="space-y-5">
        <button
          onClick={handleIncrement}
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
