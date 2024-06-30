import { Plus } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import {
  addTask,
  updateTaskReducer,
} from "../../redux/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TodoAddModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [isOpen, setIsOpen] = useState(false);
  const [updateMode, setUpdateMode] = useState(false); // Track whether modal is in update mode

  const dispatch = useAppDispatch();
  const { updatedTask } = useAppSelector((state) => state.todo);

  useEffect(() => {
    // When updatedTask changes, set modal state accordingly
    if (updatedTask?.id) {
      setIsOpen(true);
      setTask(updatedTask.title);
      setDescription(updatedTask.description);
      setPriority(updatedTask.priority);
      setUpdateMode(true); // Enable update mode
    }
  }, [updatedTask]);

  const closeModal = () => {
    setIsOpen(false);
    setUpdateMode(false); // Reset update mode when closing modal
  };

  const submitTask = (e: FormEvent) => {
    e.preventDefault();
    const randomId = Math.random().toString(36).slice(2);
    const taskDetails = {
      id: randomId,
      title: task,
      priority,
      description,
    };
    // Handle add logic
    dispatch(addTask(taskDetails));

    setTask("");
    setDescription("");
    closeModal(); // Close the modal after submitting
  };
  const updateTask = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateTaskReducer({ ...updatedTask, title: task })); // Replace with actual update logic
    setTask("");
    setDescription("");
    closeModal(); // Close the modal after submitting
  };
  console.log(updateMode);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          {updateMode ? "Update Task" : "Add Todo"}{" "}
          <Plus className="size-4 ml-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{updateMode ? "Update Task" : "Add Task"}</DialogTitle>
          <DialogDescription>
            {updateMode
              ? "Update your task details."
              : "Add your task that you want to finish!"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={updateMode ? updateTask : submitTask}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                value={task}
                onChange={(e) => setTask(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Select
                value={priority}
                onValueChange={(value) => setPriority(value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {updateMode ? "Update Task" : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoAddModal;
