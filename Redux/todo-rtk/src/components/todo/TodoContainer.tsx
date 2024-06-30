import { useAppSelector } from "../../redux/hooks";
import TodoAddModal from "./TodoAddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { filteredTodos } = useAppSelector((state) => state.todo);

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-between mb-2">
        <TodoAddModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-lg shadow-xl border border-slate-600 p-3 space-y-3">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
        ) : (
          <p className="text-center text-red-600">
            No tasks available for the selected priority.
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
