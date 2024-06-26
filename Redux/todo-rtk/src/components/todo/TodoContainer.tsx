import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-between mb-2">
        <Button>Add Todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-primary-gradient   rounded-lg shadow-xl border border-slate-600 p-3 space-y-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
