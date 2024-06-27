import { useAppSelector } from "../../redux/hooks";
import TodoAddModal from "./TodoAddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-between mb-2">
        <TodoAddModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient   rounded-lg shadow-xl border border-slate-600 p-3 space-y-3">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
