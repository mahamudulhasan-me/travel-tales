import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { addTask } from "../../redux/features/todo/todoSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const TodoAddModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const submitTask = (e: FormEvent) => {
    e.preventDefault();
    const randomId = Math.random().toString(36).slice(2);
    const taskDetails = {
      id: randomId,
      title: task,
      description,
    };
    dispatch(addTask(taskDetails));
    setTask("");
    setDescription("");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add Todo <Plus className="size-4 ml-1" />
        </Button>
      </DialogTrigger>
      <>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitTask}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  required
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  required
                  id="description"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </>
    </Dialog>
  );
};

export default TodoAddModal;
