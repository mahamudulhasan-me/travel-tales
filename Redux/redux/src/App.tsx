import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center gap-10 text-lg border border-green-400 rounded-md p-12 bg-rose-100">
        <button
          onClick={() => dispatch(increment())}
          className="rounded-md  p-2 bg-green-500"
        >
          Increment
        </button>
        <h1 className="text-2xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-md  p-2 bg-rose-500"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="rounded-md  p-2 bg-green-500"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
