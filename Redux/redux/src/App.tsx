import Box from "./components/ui/Box";
import {
  DECREMENT,
  INCREMENT,
  INCREMENTBYCOUNT,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const numberOfBoxes = Math.floor(count / 5);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-5">
      <div className="flex items-center gap-10 text-lg border border-green-400 rounded-md p-12 bg-rose-100">
        <button
          onClick={() => dispatch(INCREMENT())}
          className="rounded-md p-2 bg-green-500"
        >
          Increment
        </button>
        <h1 className="text-2xl border border-green-500 rounded-md px-4 py-2 bg-rose-200">
          {count}
        </h1>
        <button
          onClick={() => dispatch(DECREMENT())}
          className="rounded-md p-2 bg-rose-500"
        >
          Decrement
        </button>
      </div>
      <button
        onClick={() => dispatch(INCREMENTBYCOUNT(5))}
        className="rounded-md p-2 bg-blue-500"
      >
        Increment by 5
      </button>
      <div className="border border-purple-600 flex items-center gap-10 text-lg rounded-md p-8 bg-rose-100">
        {Array.from({ length: numberOfBoxes }).map((_, index) => (
          <Box key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
