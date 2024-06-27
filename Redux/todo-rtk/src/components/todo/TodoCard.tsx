import { Edit, Trash } from "lucide-react";
import {
  ITodo,
  removeTask,
  toggleTask,
} from "../../redux/features/todo/todoSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const TodoCard = ({ todo }: { todo: ITodo }) => {
  const dispatch = useAppDispatch();
  const { id, title, description, isCompleted } = todo;
  return (
    <div className="w-full flex justify-between items-center bg-slate-100 p-4 rounded-md font-semibold shadow-md">
      <Checkbox
        checked={isCompleted}
        onClick={() => dispatch(toggleTask(id))}
      />
      <p>{title}</p>
      {isCompleted ? (
        <Badge className="bg-green-500">Done</Badge>
      ) : (
        <Badge className="bg-amber-500">Pending</Badge>
      )}

      {/* <p>CreateAt</p> */}
      <p>{description}</p>
      <div className="space-x-3">
        <Button
          onClick={() => dispatch(removeTask(id))}
          variant="outline"
          size="icon"
        >
          <Trash className="size-4 text-rose-500" />
        </Button>
        <Button variant="outline" size="icon">
          <Edit className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
