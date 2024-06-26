import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="w-full flex justify-between items-center bg-slate-100 p-4 rounded-md font-semibold shadow-md">
      <input type="checkbox" name="" id="" />
      <p>Title</p>
      <p>CreateAt</p>
      <p>Description</p>
      <div className="space-x-3">
        <Button variant="outline" size="icon">
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
