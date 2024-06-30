import { useGetTasksQuery } from "../../redux/api/api";
import { ITodo } from "../../redux/features/todo/todoSlice";
import TodoAddModal from "./TodoAddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery({});
  let content = null;

  if (isLoading) content = <p>Loading...</p>;
  if (isError) content = <p>Error</p>;
  if (!isLoading && !isError && tasks) {
    content = tasks.map((todo: ITodo) => (
      <TodoCard key={todo.id} todo={todo} />
    ));
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="flex items-center justify-between mb-2">
        <TodoAddModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-lg shadow-xl border border-slate-600 p-3 space-y-3">
        {content}
      </div>
    </div>
  );
};

export default TodoContainer;
